/// <reference types="react" />
import { Product } from '../../models/product';
interface IProps {
    product: Product;
    imgUrlResolver: (code: string) => string;
    mdhCenterUrl?: string;
    onBack?: () => void;
    typeSearch?: string;
}
declare const ProductDetailCmp: React.FC<IProps>;
export default ProductDetailCmp;
