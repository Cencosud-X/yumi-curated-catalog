import { CreateDeclarationDTO } from "../models/create-declaration.dto";
export interface ITaskClient {
    createTasks(tasks: CreateDeclarationDTO[]): Promise<void>;
}
