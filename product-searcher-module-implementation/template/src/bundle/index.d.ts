import { IHomePageExtension } from './flow/home-page';
import { Components } from './sdk';
import FloatingButton from './components/floating-button';
import './index.css';
export interface IHelloWorldModuleOverride extends Components.IModuleOverride {
    extensions?: {
        home_page: IHomePageExtension;
    };
    routes?: Components.IModuleRoute[];
}
export interface IModuleProps extends Components.IModuleProps {
}
export default abstract class HelloWorldModule extends Components.Module<IHelloWorldModuleOverride> {
    static route: string;
    constructor(props: IModuleProps, override: IHelloWorldModuleOverride);
}
export { FloatingButton };
export * from './models/product';
