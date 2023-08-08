export declare const useApproval: () => {
    approvals?: import("../interfaces/IApprovalTypes").IGenericApproval[] | undefined;
    setApprovals: (a: import("../interfaces/IApprovalTypes").IGenericApproval[]) => void;
    selectedApproval?: import("../interfaces/IApprovalTypes").IGenericApproval | undefined;
    setSelectedApproval: (a: import("../interfaces/IApprovalTypes").IGenericApproval | undefined) => void;
    setModalAction: (m: import("../interfaces/IApprovalTypes").IApprovalGenericModal) => void;
    modalAction: import("../interfaces/IApprovalTypes").IApprovalGenericModal;
    envs?: import("../interfaces/IApprovalTypes").IApprovalEnvs | undefined;
    approvalTypes?: import("../interfaces/IApprovalTypes").IApprovalTypes | undefined;
    approvalCenterLoading: boolean;
    getApprovals: () => Promise<void>;
    localize: (label: string, replacements: string | number) => string;
    localeDate: string;
    getPurchaseOrderDetail: (orderId: string) => Promise<string[]>;
    getPurchaseRequisitionFiles: (orderId: string) => Promise<import("../interfaces/IApprovalTypes").IApprovalGenericFile[]>;
    getPurchaseRequisitionFileStream: (fileId: string) => Promise<import("../interfaces/IApprovalTypes").IApprovalGenericFileStream>;
    getFB60Files: (approval: import("../interfaces/IFb60").IApprovalFB60) => Promise<import("../interfaces/IApprovalTypes").IApprovalGenericFile[]>;
    getFB60FileStream: (fileId: string) => Promise<import("../interfaces/IApprovalTypes").IApprovalGenericFileStream>;
    getAccountabilityFiles: (approval: import("../interfaces/IAccountability").IApprovalAccountability) => Promise<import("../interfaces/IApprovalTypes").IApprovalGenericFile[]>;
    getAccountabilityFileStream: (fileId: string) => Promise<import("../interfaces/IApprovalTypes").IApprovalGenericFileStream>;
    approvalAction: (approval: import("../interfaces/IApprovalTypes").IGenericApproval, action: import("../interfaces/IApprovalTypes").EGenericApprovalAction) => Promise<void>;
    goBack: (n?: number | undefined) => void;
    setModalError: (modal: import("../interfaces/IApprovalTypes").IModalError) => void;
};
