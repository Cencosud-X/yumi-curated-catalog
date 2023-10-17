{{#if data.settings.flow}}
import React from 'react';
import * as SDK from '@team_yumi/sdk';
/* En la instalación de Seki, configurar si desea instalar el flujo o sólo las páginas. */
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import { Pages } from '.';

interface IStaticParams {} /* eslint-disable-line */

interface IProps {
  params: IStaticParams;
}

const Flow: React.FC<IProps> = (props) => {
  const { path } = useRouteMatch();

  type Keys = keyof typeof Pages;
  const keys = Object.keys(Pages) as Keys[];

  return (
    <Switch>
      {keys.map((key) => (
        <Route key={key} path={`${path}/${Pages[key].path}`} component={Pages[key].Page} exact />
      ))}
    </Switch>
  );
};

export default class Module extends SDK.Lib.BaseModule<IStaticParams> {
  public Component: React.FC<IProps>;
  public defaultPath = '/module';

  constructor(params: IStaticParams) {
    super(params);
    this.Component = () => <Flow params={params} />;
  }
}
{{/if}}
