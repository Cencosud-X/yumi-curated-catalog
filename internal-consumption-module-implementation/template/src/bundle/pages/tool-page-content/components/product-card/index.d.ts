/// <reference types="react" />
import { Product } from '../../../../models/product.dto';
interface IProps {
    product: Product;
}
declare const ProductCard: React.FC<IProps>;
export default ProductCard;
