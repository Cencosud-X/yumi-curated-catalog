/// <reference types="react" />
import { Declaration } from '../../../../models/declaration';
interface IProps {
    tasks: Declaration[];
    open: boolean;
    onClose?: () => void;
    onDelete: (task: Declaration) => void;
    onTaskChange: (task: Declaration) => void;
    onSend: () => void;
    miniImageUrl: (sku: string, ean: string) => string;
}
declare const ProductListModal: React.FC<IProps>;
export default ProductListModal;
