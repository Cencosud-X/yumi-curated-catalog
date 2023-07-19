/// <reference types="react" />
import { Task } from '../../../../models/task';
import './index.less';
interface IProps {
    task: Task;
    miniImageUrl: (sku: string, ean: string) => string;
}
declare const TaskCard: React.FC<IProps>;
export default TaskCard;
