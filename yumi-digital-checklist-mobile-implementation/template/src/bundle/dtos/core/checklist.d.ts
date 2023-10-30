import { IChecklistItem } from './checklist-item';
export interface IAssignedTo {
    primarysid: string;
    unique_name: string;
    email: string;
}
export interface ICreatedBy {
    primarysid: string;
    name: string;
    email: string;
}
export interface IRole {
    id: string;
    name: string;
    area?: string;
    department?: string;
    section?: string;
}
export interface IChecklistItemField {
    type: 'photo' | 'textArea';
    name: string;
    required: boolean;
    response?: string;
}
export interface IChecklist {
    templateId: string;
    name: string;
    descriptions: string;
    assignedTo: IAssignedTo[];
    roles: IRole[];
    items: IChecklistItem[];
    createdBy?: ICreatedBy;
}
export interface IChecklistItemCounter {
    _id: string;
    item: string;
    count: number;
}
