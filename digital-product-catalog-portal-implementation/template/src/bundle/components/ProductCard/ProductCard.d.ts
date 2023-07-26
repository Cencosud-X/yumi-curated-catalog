/// <reference types="react" />
import './ProductCard.css';
import { Interfaces } from '@digital-product-catalog/models';
interface Props {
    productData: Interfaces.ProductsInterfaces.IProduct;
}
declare const ProductCard: React.FC<Props>;
export default ProductCard;
