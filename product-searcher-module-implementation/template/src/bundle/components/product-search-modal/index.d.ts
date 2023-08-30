/// <reference types="react" />
import { Product } from '../../models/product';
interface IProps {
    visible: boolean;
    onClose: () => void;
    searchByCode: (code: string) => Promise<Product>;
    searchByText: (text: string) => Promise<Product[]>;
    mdhCenterUrl?: string;
}
declare const ProductSearchModal: React.FC<IProps>;
export default ProductSearchModal;
