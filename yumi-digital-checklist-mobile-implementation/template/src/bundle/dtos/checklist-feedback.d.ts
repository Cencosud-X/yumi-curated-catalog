export declare type SaveItemFeedback = {
    taskId: string;
    itemId: string;
    feedback: ItemFeedback;
};
export declare type ItemFeedback = {
    response: IFeedbackResp;
    attachments?: {
        id: string;
        name: string;
        url: string;
    }[];
    user?: {
        name: string;
        primarysid: string;
        email: string;
    } | undefined;
    comment?: string | undefined;
    created_at?: Date | undefined;
};
export declare type IFeedbackResp = 'YES' | 'NO' | 'NA';
