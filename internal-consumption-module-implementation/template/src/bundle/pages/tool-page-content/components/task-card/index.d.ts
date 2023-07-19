/// <reference types="react" />
import { Declaration } from '../../../../models/declaration';
interface IProps {
    task: Declaration;
    onDelete: (task: Declaration) => void;
    onCountChange: (task: Declaration) => void;
    miniImageUrl: (sku: string, ean: string) => string;
}
declare const TaskCard: React.FC<IProps>;
export default TaskCard;
