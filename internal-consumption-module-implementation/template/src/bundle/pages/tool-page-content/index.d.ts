/// <reference types="react" />
import { IModuleClient } from '../../clients/module-client.interface';
import { IProductClient } from '../../clients/product-client.interface';
import { ITaskClient } from '../../clients/tasks-client.interface';
interface IProps {
    moduleClient: IModuleClient;
    productClient: IProductClient;
    taskClient: ITaskClient;
}
declare const ToolPageWrapper: React.FC<IProps>;
export default ToolPageWrapper;
