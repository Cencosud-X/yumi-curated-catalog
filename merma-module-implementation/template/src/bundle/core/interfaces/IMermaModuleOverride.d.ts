import { Components } from "../../sdk";
import { IHomePageExtension, IAlertPageExtension, IProductsPageExtension } from "./";
export interface IMermaModuleOverride extends Components.IModuleOverride {
    extensions?: {
        home_page: IHomePageExtension;
        products_page: IProductsPageExtension;
        alert_page: IAlertPageExtension;
    };
    routes?: Components.IModuleRoute[];
}
