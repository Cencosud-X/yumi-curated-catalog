import { IHomePageExtension } from './flow/home-page';
import { Components } from './sdk';
export interface IPortalModuleOverride extends Components.IModuleOverride {
    extensions?: {
        home_page: IHomePageExtension;
    };
    routes?: Components.IModuleRoute[];
}
export interface IModuleProps extends Components.IModuleProps {
}
export default abstract class PortalModule extends Components.Module<IPortalModuleOverride> {
    static route: string;
    constructor(props: IModuleProps, override: IPortalModuleOverride);
}
