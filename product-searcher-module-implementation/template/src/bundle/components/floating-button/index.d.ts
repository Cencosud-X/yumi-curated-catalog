/// <reference types="react" />
import { Product } from '../../models/product';
interface IProps {
    disabled?: boolean;
    showOnboarding?: boolean;
    searchByCode: (code: string) => Promise<Product>;
    searchByText: (text: string) => Promise<Product[]>;
}
declare const FloatingButton: React.FC<IProps>;
export default FloatingButton;
