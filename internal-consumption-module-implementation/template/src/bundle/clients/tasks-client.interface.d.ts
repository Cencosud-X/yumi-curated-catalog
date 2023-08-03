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
    createTasks(tasks: CreateDeclarationDTO): Promise<void>;
    subTasks(): Promise<Task[]>;
    controlTasks(): Promise<Task[]>;
    setTaskAction(obj: ISetTaskActionDto): Promise<void>;
}
export {};
