import * as H from 'history';
import { EGenericApprovalAction, IApprovalEnvs, IApprovalGenericFile, IApprovalGenericFileStream, IApprovalGenericModal, IApprovalTypes, IGenericApproval, IModalError } from './IApprovalTypes';
import { IApprovalFB60 } from './IFb60';
import { IApprovalAccountability } from './IAccountability';
export interface ApprovalProviderProps {
    historyData: H.History;
    env?: IApprovalEnvs;
    approval_types?: IApprovalTypes;
    handleAnalytics?: (approval: IGenericApproval, action: 'approve' | 'reject' | 'giveback' | 'discard' | 'openCard' | 'openDetail' | 'openFile') => void;
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
    goBack: () => void;
    setModalError: (modal: IModalError) => void;
};
