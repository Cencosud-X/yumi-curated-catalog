import { CreateDeclarationDTO } from "../models/create-declaration.dto";
import { Task } from "../models/task";
interface ITaskStateAction {
    id: string;
    action: 'REJECTED' | 'APPROVED' | 'REVERSED';
    count?: number;
}
export interface ISetTaskActionDto {
    reports: ITaskStateAction[];
}
export interface ITaskClient {
    /**
     * Create tasks Request
     * @param tasks to be created
     */
    createTasks(tasks: CreateDeclarationDTO): Promise<void>;
    /**
     * Retrieve Revisor tasks list
     */
    revisorTasks(): Promise<Task[]>;
    /**
     * Retrieve Control tasks list
     */
    controlTasks(): Promise<Task[]>;
    /**
     * Change task state solicitude
     * @param obj with change data
     */
    setTaskAction(obj: ISetTaskActionDto): Promise<void>;
    /**
     * Retrieve current Creator Pending Tasks
     */
    creatorPendingTasks(): Promise<Task[]>;
    /**
     * Retrieve current Creator Rejected Tasks
     */
    creatorRejectedTasks(): Promise<Task[]>;
    /**
     * Retrieve current Creator Expired Tasks
     */
    creatorExpiredTasks(): Promise<Task[]>;
    /**
     * Retrieve completed tasks
     */
    processedTasks(): Promise<Task[]>;
    /**
     * Retrieve expired tasks
     */
    expiredTasks(): Promise<Task[]>;
}
export {};
