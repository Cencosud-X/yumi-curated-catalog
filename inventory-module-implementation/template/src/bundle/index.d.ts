import { IHomePageExtension } from './flow/home-page';
import { IInventoryPageExtension } from './flow/inventory';
import { Components } from './sdk';
import '@team_yumi/ramen/index.css';
import '@team_yumi/ramen/themes/default.css';
import '@team_yumi/ramen/themes/fonts.css';
export interface IInventoryModuleOverride extends Components.IModuleOverride {
    extensions?: {
        home_page: IHomePageExtension;
        inventory_page?: IInventoryPageExtension;
    };
    routes?: Components.IModuleRoute[];
}
export interface IModuleProps extends Components.IModuleProps {
}
export default abstract class InventoryModule extends Components.Module<IInventoryModuleOverride> {
    static route: string;
    constructor(props: IModuleProps, override: IInventoryModuleOverride);
}
