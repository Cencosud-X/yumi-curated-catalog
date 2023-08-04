import { Footer, Header } from './Layout';
import { DrawerCategories, ElevatorButton, LoaderScreen } from './components';
import ModalCart from './components/ModalCart/ModalCart';
import { CartContextProvider } from './context/Cart/CartContext';
import { GlobalContextProvider } from './context/Global/GlobalContext';
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
export { Footer, Header, CartContextProvider, GlobalContextProvider, ElevatorButton, LoaderScreen, ModalCart, DrawerCategories };
export default abstract class PortalModule extends Components.Module<IPortalModuleOverride> {
    static route: string;
    constructor(props: IModuleProps, override: IPortalModuleOverride);
}
