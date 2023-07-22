export interface IApprovalFB60File {
    fileId: string;
    fileName: string;
    fileMime: string;
}
export interface IApprovalFB60FileStream {
    type: string;
    data: ArrayBuffer;
}
export interface IApprovalFB60 {
    type: string;
    category: string;
    country?: string;
    orderId: string;
    clientId: string;
    clientDescription: string;
    orderValue: number;
    orderValueCurrency: string;
    expirationDate: string;
    store: string;
    documentId: string;
    exerciseYear: string;
    companyDescription: string;
    observation?: string;
}
export interface IApprovalFB60Modal {
    show?: boolean;
    action?: 'approve' | 'reject';
}
