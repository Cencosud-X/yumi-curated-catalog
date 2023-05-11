import { IHomePageExtension } from './flow/home-page';
import { Components } from './sdk';
export interface IInventoryModuleOverride extends Components.IModuleOverride {
    extensions?: {
        home_page: IHomePageExtension;
    };
    routes?: Components.IModuleRoute[];
}
export interface IModuleProps extends Components.IModuleProps {
}
export default abstract class InventoryModule extends Components.Module<IInventoryModuleOverride> {
    static route: string;
    constructor(props: IModuleProps, override: IInventoryModuleOverride);
}
