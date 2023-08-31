/// <reference types="react" />
import { Product } from '../../models/product';
interface IProps {
    products: Product[];
    imgUrlResolver: (code: string) => string;
    mdhCenterUrl?: string;
    onBack?: () => void;
    searchByText: (text: string) => Promise<Product[]>;
    onProductSelect: (product: Product) => void;
}
declare const ProductListCmp: React.FC<IProps>;
export default ProductListCmp;
