/// <reference types="react" />
import { Task } from '../../models/task';
import { ICUser } from '../../models/user.dto';
interface IProductDetail {
    selectedTask: Task;
    user?: ICUser;
    goBack: () => void;
    miniImageUrl: (sku: string, ean: string) => string;
    rejectTask?: (task: Task, qty: number) => Promise<void>;
    freeTask?: (task: Task, qty: number) => Promise<void>;
    reverseTask?: (task: Task) => Promise<void>;
    showActions: boolean;
    controlTag?: boolean;
}
declare const ProductDetail: React.FC<IProductDetail>;
export default ProductDetail;
