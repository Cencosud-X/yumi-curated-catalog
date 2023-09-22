import { Header } from './Layout';
import { DrawerCategories } from './components';
import ModalCart from './components/ModalCart/ModalCart';
import { PortalLayout } from './Layout/index';
import { ICartPageExtension } from './flow/cart-page';
import { IHomePageExtension } from './flow/home-page';
import { ISignUpPageExtension } from './flow/signup-page';
import { IPendingApproveExtension } from './flow/pending-approve-page';
import { IProductsDetailsPageExtension } from './flow/products-details-page';
import { IProductsListPageExtension } from './flow/products-list-page';
import { Components } from './sdk';
import { ICreatePasswordExtension } from './flow/create-password-page';
import { IActiveAccountExtension } from './flow/active-account-page';
import { IPendingResetPasswordExtension } from './flow/wait-password-page';
import { IForgotPasswordExtension } from './flow/forgot-password-page';
import { IResetPasswordExtension } from './flow/reset-password-page';
import { IProfilePageExtension } from './flow/profile-page';
export interface IPortalModuleOverride extends Components.IModuleOverride {
    extensions?: {
        home_page: IHomePageExtension;
        products_list_page: IProductsListPageExtension;
        products_details_page: IProductsDetailsPageExtension;
        cart_page: ICartPageExtension;
        signup_page: ISignUpPageExtension;
        wait_page: IPendingApproveExtension;
        create_password: ICreatePasswordExtension;
        active_account: IActiveAccountExtension;
        wait_password_page: IPendingResetPasswordExtension;
        forgot_password_page: IForgotPasswordExtension;
        reset_password_page: IResetPasswordExtension;
        profile_page: IProfilePageExtension;
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
