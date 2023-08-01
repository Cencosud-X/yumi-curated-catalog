import { IRequest } from "../../request";
export declare const enum TaskState {
    PENDING = "PENDING",
    IN_PROGRESS = "IN_PROGRESS",
    REJECTED = "REJECTED",
    COMPLETED = "COMPLETED"
}
export declare enum Country {
    CL = "CL",
    CO = "CO",
    AR = "AR",
    PE = "PE",
    BR = "BR"
}
export interface ITask {
    id: string;
    state: TaskState;
    task_number: string;
    assinged_to: string[];
    category: string;
    country: Country;
    created_at: Date;
    expireAt: Date | null;
    store: {
        id: string;
    };
    type: 'PRICE_REDUCTION';
    meta_data: IRequest;
}
