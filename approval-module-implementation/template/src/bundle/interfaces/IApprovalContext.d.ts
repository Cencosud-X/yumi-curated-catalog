import * as H from 'history';
import { EGenericApprovalAction, IApprovalEnvs, IApprovalGenericFile, IApprovalGenericFileStream, IApprovalGenericModal, IApprovalTypes, IGenericApproval, IModalError } from './IApprovalTypes';
import { IApprovalFB60 } from './IFb60';
import { IApprovalAccountability } from './IAccountability';
export interface ApprovalProviderProps {
    historyData: H.History;
    env?: IApprovalEnvs;
    approval_types?: IApprovalTypes;
    callback_action?: IApprovalCallback;
}
export interface IApprovalCallback {
    (view: 'central' | 'accountability' | 'fb60' | 'paymentProposal' | 'purchaseOrder' | 'purchaseRequisition', action: 'approve' | 'reject' | 'giveback' | 'discard' | 'list' | 'detail' | 'open_file', approvals?: IGenericApproval, userAd?: string): Promise<void>;
}
export declare type ApprovalContextData = {
    approvals?: IGenericApproval[];
    setApprovals: (a: IGenericApproval[]) => void;
    selectedApproval?: IGenericApproval;
    setSelectedApproval: (a: IGenericApproval | undefined) => void;
    setModalAction: (m: IApprovalGenericModal) => void;
    modalAction: IApprovalGenericModal;
    envs?: IApprovalEnvs;
    approvalTypes?: IApprovalTypes;
    approvalCenterLoading: boolean;
    getApprovals: () => Promise<void>;
    localize: (label: string, replacements: string | number) => string;
    localeDate: string;
    getPurchaseOrderDetail: (orderId: string) => Promise<string[]>;
    getPurchaseRequisitionFiles: (orderId: string) => Promise<IApprovalGenericFile[]>;
    getPurchaseRequisitionFileStream: (fileId: string) => Promise<IApprovalGenericFileStream>;
    getFB60Files: (approval: IApprovalFB60) => Promise<IApprovalGenericFile[]>;
    getFB60FileStream: (fileId: string) => Promise<IApprovalGenericFileStream>;
    getAccountabilityFiles: (approval: IApprovalAccountability) => Promise<IApprovalGenericFile[]>;
    getAccountabilityFileStream: (fileId: string) => Promise<IApprovalGenericFileStream>;
    approvalAction: (approval: IGenericApproval, action: EGenericApprovalAction) => Promise<void>;
    goBack: (n?: number) => void;
    setModalError: (modal: IModalError) => void;
    callback_action?: IApprovalCallback;
    findAD: () => string | undefined;
};
