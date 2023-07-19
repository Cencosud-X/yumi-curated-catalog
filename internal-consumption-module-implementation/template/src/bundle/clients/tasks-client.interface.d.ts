import { CreateDeclarationDTO } from "../models/create-declaration.dto";
import { Task } from "../models/task";
export interface ITaskClient {
    createTasks(tasks: CreateDeclarationDTO): Promise<void>;
    subTasks(): Promise<Task[]>;
}
