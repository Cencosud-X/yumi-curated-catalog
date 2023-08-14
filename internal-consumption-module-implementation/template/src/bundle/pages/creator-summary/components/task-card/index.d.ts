/// <reference types="react" />
import { Task } from '../../../../models/task';
export declare type TaskCardField = 'sku' | 'hour' | 'document' | 'rejected_by';
interface IProps {
    task: Task;
    miniImageUrl: (sku: string, ean: string) => string;
    fields?: TaskCardField[];
}
declare const TaskCard: React.FC<IProps>;
export default TaskCard;
