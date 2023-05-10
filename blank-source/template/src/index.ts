import { HomePage, IHomePageExtension } from './flow/home-page';
import { Components } from './sdk';

export interface IHelloWorldModuleOverride extends Components.IModuleOverride {
  extensions?: {
    home_page: IHomePageExtension;
  };
  routes?: Components.IModuleRoute[];
}

export interface IModuleProps extends Components.IModuleProps {}

export default abstract class HelloWorldModule extends Components.Module<IHelloWorldModuleOverride> {
  static route = '/hello-world';

  constructor(props: IModuleProps, override: IHelloWorldModuleOverride) {
    super(props, {
      routes: [
        {
          path: '/',
          page: HomePage as typeof Components.Page,
        },
      ],
      override,
    });
  }
}