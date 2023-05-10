import { IonRouterOutlet } from '@ionic/react';
import * as React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';

import { IPageExtensions, Page } from '../Page';

const toSnakeCase = (str: string) => {
  const matches =
    str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g) || [];

  return matches.map((x) => x.toLowerCase()).join('_');
};

export interface IModuleRoute {
  path: string;
  page: typeof Page;
}

export interface IModuleOverride {
  extensions?: Record<string, IPageExtensions>;
  routes?: IModuleRoute[];
}

export interface IModuleDescriptor<O extends IModuleOverride> {
  routes: IModuleRoute[];
  override: O;
}

export interface IModuleState {}

export interface IModuleProps extends RouteComponentProps {};

export class Module<IOverride extends IModuleOverride = {}> extends React.Component<IModuleProps, IModuleState> {
  descriptor: IModuleDescriptor<IOverride>;

  constructor(props: IModuleProps, descriptor: IModuleDescriptor<IOverride>) {
    super(props);
    this.descriptor = descriptor;
  }

  override render() {
    const { match } = this.props;

    const routes: IModuleRoute[] = [...this.descriptor.routes];
    if (this.descriptor.override.routes) {
      this.descriptor.override.routes.forEach((route) => {
        const match = routes.find((r) => r.path === route.path);
        if (!match) {
          routes.push(route);
          return;
        }

        console.warn(
          `Override route ${match.path} was not added because it already exists in definition module.`
        );
      });
    }

    return (
      <IonRouterOutlet>
        {routes.map(({ path, page: PageComponent }) => {
          const absolutePath = [match.url, path].join('');
          return (
            <Route
              key={path}
              path={absolutePath}
              exact={true}
              render={(props) => {
                let extensions = null;
                if (
                  this.descriptor.override.extensions &&
                  this.descriptor.override.extensions[toSnakeCase(PageComponent.name)]
                ) {
                  extensions = this.descriptor.override.extensions[toSnakeCase(PageComponent.name)];
                }
                return <PageComponent {...props} extensions={extensions} />;
              }}
            />
          );
        })}
      </IonRouterOutlet>
    );
  }
}
