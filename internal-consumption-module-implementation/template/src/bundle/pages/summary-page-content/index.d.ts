/// <reference types="react" />
import { Task } from '../../models/task';
import { IModuleClient, UserLevel } from '../../clients/module-client.interface';
import { ImgDataCardField } from '../../components/img-data-card';
import { ITaskClient } from '../../clients/tasks-client.interface';
export declare type Tabs = 'PENDING' | 'REJECTED' | 'EXPIRED' | 'PROCESSED';
export declare type TaskCardFields = Record<Tabs, (obj: any) => ImgDataCardField[]>;
export declare type DataFn = Record<Tabs, () => Promise<Task[]>>;
interface IProps {
    taskClient: ITaskClient;
    title: string;
    dataFn: DataFn;
    expectedUserLevel: UserLevel;
    miniImageUrl: (sku: string, ean: string) => string;
    moduleClient: IModuleClient;
    tabs: Tabs[];
    defaultTab: Tabs;
    cardFields: TaskCardFields;
    controlTag: boolean;
    showDetails: boolean;
}
declare const SummaryPageWrapper: React.FC<IProps>;
export default SummaryPageWrapper;
