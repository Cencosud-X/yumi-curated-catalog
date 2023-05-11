import { IHomePageExtension } from './flow/home-page';
import { Components } from './sdk';
export interface IArcusInventoryModuleOverride extends Components.IModuleOverride {
    extensions?: {
        home_page: IHomePageExtension;
    };
    routes?: Components.IModuleRoute[];
}
export interface IModuleProps extends Components.IModuleProps {
}
export default abstract class ArcusInventoryModule extends Components.Module<IArcusInventoryModuleOverride> {
    static route: string;
    constructor(props: IModuleProps, override: IArcusInventoryModuleOverride);
}
