import { IHomePageExtension } from './flow/home-page';
import { Components } from './sdk';
export declare type IModuleProps = Components.IModuleProps;
export interface IHelloWorldDescription extends Components.IModuleOverride {
    extensions?: {
        home_page: IHomePageExtension;
    };
    routes?: Components.IModuleRoute[];
}
export default abstract class HelloWorldModule extends Components.Module {
    protected override: IHelloWorldDescription;
    static route: string;
    constructor(props: Components.IModuleProps, override: IHelloWorldDescription);
}
