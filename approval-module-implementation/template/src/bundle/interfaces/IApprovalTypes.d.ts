export interface IApprovalEnvs {
    country: string;
    approvalFicoApi: string;
    approvalFioriApi: string;
    approvalApiKey: string;
    localeDate: string;
}
export declare type IApprovalTypes = ('accountability' | 'fb60' | 'paymentProposal' | 'purchaseOrder' | 'purchaseRequisition')[];
export interface IGenericApproval {
    type: 'approval';
    category: 'accountability' | 'fb60' | 'paymentProposal' | 'purchaseOrder' | 'purchaseRequisition';
}
export declare enum EGenericApprovalAction {
    APPROVE = "approve",
    REJECT = "reject",
    GIVEBACK = "giveback",
    DISCARD = "discard"
}
export interface IApprovalAction {
    userAd: string;
    approval: IGenericApproval;
}
export interface IModalError {
    title?: string;
    show: boolean;
}
export interface IActionLocalization {
    action: {
        key: string;
        type: any;
        icon?: any;
        text: string;
    };
    questions: {
        title: string;
        text: string;
    };
    success: string;
    error: string;
}
export interface IApprovalGenericModal {
    show?: boolean;
    action?: EGenericApprovalAction;
    needBack?: boolean;
}
export interface IApprovalGenericFile {
    fileId: string;
    fileName: string;
    fileMime: string;
}
export interface IHandleDownload {
    file: IApprovalGenericFile;
    localize: (label: string, replacements: string | number) => string;
    download: (fileId: string) => Promise<IApprovalGenericFileStream>;
}
export interface IApprovalGenericFileStream {
    type: string;
    data: ArrayBuffer;
}
