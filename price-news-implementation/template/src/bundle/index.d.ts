import { Components } from './sdk';
export interface IHelloWorldModuleOverride extends Components.IModuleOverride {
}
export interface IModuleProps extends Components.IModuleProps {
}
export default abstract class HelloWorldModule extends Components.Module<IHelloWorldModuleOverride> {
    static route: string;
    constructor(props: IModuleProps, override: IHelloWorldModuleOverride);
}
