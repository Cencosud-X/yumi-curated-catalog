import { Components } from './sdk';
import { ICategoriesPageExtensions } from './pages/Categories';
import { IProductListPageExtensions } from './pages/ProductList';
export declare type IModuleProps = Components.IModuleProps;
export interface IFoundRateOverride {
    extensions?: {
        categories_page: ICategoriesPageExtensions;
        product_list_page: IProductListPageExtensions;
    };
    routes?: Components.IModuleRoute[];
}
export declare abstract class FoundRateModule extends Components.Module {
    protected override: IFoundRateOverride;
    static route: string;
    constructor(props: Components.IModuleProps, override: IFoundRateOverride);
}
