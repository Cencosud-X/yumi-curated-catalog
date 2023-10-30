import { IChecklist } from './checklist';
import { IChecklistItemTask } from './checklist-item';
export interface IChecklistTask {
    task_id: string;
    store: string;
    type: string;
    state: string;
    meta_data: {
        name: string;
        descriptions: string;
    };
}
export interface IChecklistTaskExtended {
    id: string;
    store: {
        id: string;
    };
    type: string;
    state: string;
    meta_data: IChecklist;
}
export interface IChecklistTaskItem {
    id: string;
    store: {
        id: string;
    };
    type: string;
    state: string;
    meta_data: IChecklistItemTask;
}
export interface ICountItem {
    id?: string;
    name: string;
    total: number;
    meta_data?: Record<string, any>;
    score?: any;
    subItems?: Array<ICountItem>;
}
