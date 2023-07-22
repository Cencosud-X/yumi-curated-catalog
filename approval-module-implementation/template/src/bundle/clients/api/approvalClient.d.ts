import FicoAPIClient from './ficoClient';
import FioriAPIClient from './fioriClient';
interface IGetApprovals {
    type: 'accountability' | 'fb60' | 'paymentProposal' | 'purchaseOrder' | 'purchaseRetail' | 'wholesaleSales' | 'purchaseRequisition';
    userAd: string;
}
declare class ApprovalAPI {
    fico: FicoAPIClient;
    fiori: FioriAPIClient;
    setCountryCode(code: string): void;
    getApprovals(request: IGetApprovals): Promise<{
        success: boolean;
        data: import("../../interfaces/IPurchaseRequisition").IApprovalPurchaseRequisition[];
    } | {
        success: boolean;
        data: import("../../interfaces/IAccountability").IApprovalAccountability[];
    } | {
        success: boolean;
        data: import("../../interfaces/IFb60").IApprovalFB60[];
    } | {
        success: boolean;
        data: import("../../interfaces/IPaymentProposal").IApprovalPaymentProposal[];
    } | {
        success: boolean;
        data: import("../../interfaces/IPurchaseOrder").IApprovalPurchaseOrder[];
    } | {
        success: boolean;
        data: string;
    }>;
}
declare const approvalAPI: ApprovalAPI;
export default approvalAPI;
