/// <reference types="react" />
import { ITaskClient } from '../../clients/tasks-client.interface';
import { Task } from '../../models/task';
import { IModuleClient } from '../../clients/module-client.interface';
import { UserLevel } from '../../models/user.dto';
interface IProps {
    title: string;
    userLevel: UserLevel;
    btnActionText: string;
    taskClient: ITaskClient;
    moduleClient: IModuleClient;
    miniImageUrl: (sku: string, ean: string) => string;
}
declare type ACTIONS = 'APPROVED' | 'REJECTED';
export interface IRetryAction {
    task: Task;
    qty: number;
    action: ACTIONS;
}
declare const TasksPageWrapper: React.FC<IProps>;
export default TasksPageWrapper;
