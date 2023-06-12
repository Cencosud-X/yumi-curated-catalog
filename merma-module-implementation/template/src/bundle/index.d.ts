/// <reference types="react" />
import { IProductManagementExtension } from './flow/product-management-page';
import { IHomePageExtension } from './flow/home-page';
import { Components } from './sdk';
export interface IMermaModuleOverride extends Components.IModuleOverride {
    extensions?: {
        home_page: IHomePageExtension;
        product_management_page: IProductManagementExtension;
    };
    routes?: Components.IModuleRoute[];
}
export declare type IModuleProps = Components.IModuleProps;
export default abstract class MermaModule extends Components.Module<IMermaModuleOverride> {
    static route: string;
    constructor(props: IModuleProps, override: IMermaModuleOverride);
    render(): JSX.Element;
}
