import { IChecklistItemField, IRole } from './checklist';
export interface IFeedback {
    comment: string;
    attachments: {
        id: string;
        name: string;
        url: string;
    }[];
    response: string;
    user: {
        primarysid: string;
        name: string;
        email: string;
    };
    created_at: string;
}
export interface IChecklistItem {
    id: string;
    title: string;
    description: string;
    response?: boolean;
    fields: IChecklistItemField[];
    feedback?: IFeedback;
    parent_feedback?: IFeedback;
}
export interface IChecklistItemTask {
    templateId: string;
    name: string;
    descriptions: string;
    roles: IRole[];
    item: IChecklistItem;
    parent_feedback: IFeedback;
}
