/// <reference types="react" />
import { Components } from './sdk';
import { IMenuPageExtension } from './flow/inventory-menu-page';
import { IInventoryNewPageExtension } from './flow/inventory-new-page';
import { IInventorySavedPageExtension } from './flow/inventory-saved-page';
export interface IInventoryModuleOverride extends Components.IModuleOverride {
    extensions?: {
        menu_page: IMenuPageExtension;
        inventory_new_page?: IInventoryNewPageExtension;
        inventory_saved_page?: IInventorySavedPageExtension;
    };
    routes?: Components.IModuleRoute[];
}
export interface IModuleProps extends Components.IModuleProps {
}
export default abstract class InventoryModule extends Components.Module<IInventoryModuleOverride> {
    static route: string;
    constructor(props: IModuleProps, override: IInventoryModuleOverride);
    render(): JSX.Element;
}
