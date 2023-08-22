import { Header } from './Layout';
import { DrawerCategories } from './components';
import ModalCart from './components/ModalCart/ModalCart';
import { PortalLayout } from './Layout/index';
import { ICartPageExtension } from './flow/cart-page';
import { IHomePageExtension } from './flow/home-page';
import { IProductsDetailsPageExtension } from './flow/products-details-page';
import { IProductsListPageExtension } from './flow/products-list-page';
import { Components } from './sdk';
export interface IPortalModuleOverride extends Components.IModuleOverride {
    extensions?: {
        home_page: IHomePageExtension;
        products_list_page: IProductsListPageExtension;
        products_details_page: IProductsDetailsPageExtension;
        cart_page: ICartPageExtension;
    };
    routes?: Components.IModuleRoute[];
}
export interface IModuleProps extends Components.IModuleProps {
}
export { Header, PortalLayout, ModalCart, DrawerCategories };
export default abstract class PortalModule extends Components.Module<IPortalModuleOverride> {
    static route: string;
    constructor(props: IModuleProps, override: IPortalModuleOverride);
}
