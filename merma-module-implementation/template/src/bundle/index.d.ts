/// <reference types="react" />
import { IHomePageExtension } from './flow/home-page';
import { IProductsPageExtension } from './flow/products-page';
import { IAlertPageExtension } from './flow/product-alert-page';
import { Components } from './sdk';
export interface IMermaModuleOverride extends Components.IModuleOverride {
    extensions?: {
        home_page: IHomePageExtension;
        products_page: IProductsPageExtension;
        alert_page: IAlertPageExtension;
    };
    routes?: Components.IModuleRoute[];
}
export declare type IModuleProps = Components.IModuleProps;
export default abstract class MermaModule extends Components.Module<IMermaModuleOverride> {
    static route: string;
    constructor(props: IModuleProps, override: IMermaModuleOverride);
    render(): JSX.Element;
}
