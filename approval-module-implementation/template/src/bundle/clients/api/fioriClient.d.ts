import { IApprovalAccountability } from '../../interfaces/IAccountability';
import { EGenericApprovalAction, IApprovalAction, IApprovalGenericFile, IApprovalGenericFileStream, IGenericApproval } from '../../interfaces/IApprovalTypes';
import { IApprovalFB60 } from '../../interfaces/IFb60';
import { IApprovalPaymentProposal } from '../../interfaces/IPaymentProposal';
import { IApprovalPurchaseOrder } from '../../interfaces/IPurchaseOrder';
import AxiosProvider from './axios/axios.provider';
declare class FioriAPI extends AxiosProvider {
    private countryCode;
    constructor();
    setCountryCode(code: string): void;
    getAccountability(userAd: string): Promise<IApprovalAccountability[]>;
    getFb60(userAd: string): Promise<IApprovalFB60[]>;
    getFB60Files(data: {
        companyDescription: string;
        documentId: string;
        exerciseYear: string;
    }): Promise<IApprovalGenericFile[]>;
    getFB60FileStream(fileId: string): Promise<IApprovalGenericFileStream>;
    getPaymentProposal(userAd: string): Promise<IApprovalPaymentProposal[]>;
    getPurchaseOrder(userAd: string): Promise<IApprovalPurchaseOrder[]>;
    getPurchaseOrderDetail(orderId: string): Promise<string[]>;
    getAccountabilityFiles(data: {
        pernr: string;
        reinr: string;
    }): Promise<IApprovalGenericFile[]>;
    getAccountabilityFileStream(fileId: string): Promise<IApprovalGenericFileStream>;
    approvalAction(data: IGenericApproval, action: EGenericApprovalAction, userAd: string): Promise<IApprovalAction>;
}
export default FioriAPI;
