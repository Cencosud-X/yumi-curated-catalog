import { HomePage, IHomePageExtension } from './flow/home-page';
import { Components } from './sdk';

export type IModuleProps = Components.IModuleProps;

export interface IHelloWorldDescription extends Components.IModuleOverride {
  extensions?: {
    home_page: IHomePageExtension;
  };
  routes?: Components.IModuleRoute[];
}

export abstract class HelloWorldModule extends Components.Module {
  protected override: IHelloWorldDescription;
  static route = '/hello-world';

  constructor(props: Components.IModuleProps, override: IHelloWorldDescription) {
    super(props, {
      routes: [
        {
          path: '/',
          page: HomePage as typeof Components.Page,
        },
      ],
      override,
    });
    this.override = override;
  }
}
