/// <reference types="react" />
import { ITaskClient } from '../../../../clients/tasks-client.interface';
import { CostCenter } from '../../../../models/cost-center.dto';
interface IProps {
    costCenter: CostCenter;
    open: boolean;
    onClose?: () => void;
    taskClient: ITaskClient;
}
declare const ProductListModal: React.FC<IProps>;
export default ProductListModal;
