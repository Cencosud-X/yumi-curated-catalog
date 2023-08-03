/// <reference types="react" />
import { Task } from '../../../../../../models/task';
import { ICardState } from '../..';
interface IProps {
    task: Task;
    markedAs: ICardState | undefined;
    miniImageUrl: (sku: string, ean: string) => string;
    onSelectCard: (task: Task) => void;
    onMarkTask: (task: Task, state: ICardState) => void;
}
declare const ProductCard: React.FC<IProps>;
export default ProductCard;
