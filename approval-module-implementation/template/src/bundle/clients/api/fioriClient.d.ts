import { IApprovalAccountability } from '../../interfaces/IAccountability';
import { IApprovalFB60, IApprovalFB60File, IApprovalFB60FileStream } from '../../interfaces/IFb60';
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
    }): Promise<IApprovalFB60File[]>;
    getFB60FileStream(fileId: string): Promise<IApprovalFB60FileStream>;
    getPaymentProposal(userAd: string): Promise<IApprovalPaymentProposal[]>;
    getPurchaseOrder(userAd: string): Promise<IApprovalPurchaseOrder[]>;
    getPurchaseOrderDetail(orderId: string): Promise<string[]>;
}
export default FioriAPI;
