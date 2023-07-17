import { CreateDeclarationDTO } from "../models/create-declaration.dto";
import RESTClient from "./rest.client";
import { ITaskClient } from "./tasks-client.interface";
export declare class MDHTasksClient extends RESTClient implements ITaskClient {
    createTasks(tasks: CreateDeclarationDTO[]): Promise<void>;
}
