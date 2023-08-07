/// <reference types="react" />
import { Task } from '../../models/task';
import { IModuleClient } from '../../clients/module-client.interface';
interface IProps {
    pendingTasksFn: () => Promise<Task[]>;
    rejectedTasksFn: () => Promise<Task[]>;
    expiredTasksFn: () => Promise<Task[]>;
    miniImageUrl: (sku: string, ean: string) => string;
    moduleClient: IModuleClient;
}
declare const CreatorSummaryPageWrapper: React.FC<IProps>;
export default CreatorSummaryPageWrapper;
