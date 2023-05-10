import { HomePage, IHomePageExtension } from './flow/home-page';
import { Components } from './sdk';

export interface IHelloWorldModuleOverride extends Components.IModuleOverride {
  extensions?: {
    home_page: IHomePageExtension;
  };
  routes?: Components.IModuleRoute[];
}

export interface IHelloWorldModuleProps extends Components.IModuleProps {}

export default abstract class HelloWorldModule extends Components.Module<IHelloWorldModuleOverride> {
  static route = '/hello-world';

  constructor(props: IHelloWorldModuleProps, override: IHelloWorldModuleOverride) {
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

interface IHelloWorldProps extends IHelloWorldModuleProps {}

export class HelloWorld extends HelloWorldModule {

  constructor(props: IHelloWorldProps) {
    super(props, {
      routes: [],
      extensions: {
        home_page: {
          white_boxes: {
            red_box: () => 'Red Box',
          }
        }
      }
    });
  }
}
