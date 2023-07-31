/// <reference types="react" />
import './ShopCartItem.css';
import { Interfaces } from '../../models';
interface IProps {
    item: Interfaces.ProductsInterfaces.IProduct;
    showPrices?: boolean;
}
declare const _default: import("react").NamedExoticComponent<IProps>;
export default _default;
