import { IHomePageExtension } from './flow/home-page';
import { Components } from './sdk';
export interface IIamModuleOverride extends Components.IModuleOverride {
    extensions?: {
        home_page: IHomePageExtension;
    };
    routes?: Components.IModuleRoute[];
}
export interface IModuleProps extends Components.IModuleProps {
}
export default abstract class IamModule extends Components.Module<IIamModuleOverride> {
    static route: string;
    constructor(props: IModuleProps, override: IIamModuleOverride);
}
