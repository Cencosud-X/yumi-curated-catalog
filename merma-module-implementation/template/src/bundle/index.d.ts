import { IHomePageExtension } from './flow/home-page';
import { Components } from './sdk';
export interface IMermaModuleOverride extends Components.IModuleOverride {
    extensions?: {
        home_page: IHomePageExtension;
    };
    routes?: Components.IModuleRoute[];
}
export interface IModuleProps extends Components.IModuleProps {
}
export default abstract class MermaModule extends Components.Module<IMermaModuleOverride> {
    static route: string;
    constructor(props: IModuleProps, override: IMermaModuleOverride);
}
