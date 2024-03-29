/// <reference types="react" />
import { Product } from '../../models/product';
interface IProps {
    searchByCode: (code: string) => Promise<void>;
    searchByText: (text: string) => Promise<Product[]>;
    onSearchByTextResult: (products: Product[]) => void;
}
declare const ProductSearchCmp: React.FC<IProps>;
export default ProductSearchCmp;
