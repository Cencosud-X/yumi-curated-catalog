/// <reference types="react" />
import { Product } from '../../../../models/product.dto';
interface IProps {
    product: Product;
    miniImageUrl: (sku: string, ean: string) => string;
}
declare const ProductCard: React.FC<IProps>;
export default ProductCard;
