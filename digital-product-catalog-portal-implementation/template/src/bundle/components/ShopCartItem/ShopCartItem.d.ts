/// <reference types="react" />
import './ShopCartItem.css';
import { Interfaces } from '@digital-product-catalog/models';
interface IProps {
    item: Interfaces.ProductsInterfaces.IProduct;
    showPrices?: boolean;
}
declare const _default: import("react").NamedExoticComponent<IProps>;
export default _default;
