import { EGenericApprovalAction, IApprovalAction, IApprovalGenericFile, IApprovalGenericFileStream, IGenericApproval } from '../../interfaces/IApprovalTypes';
import { IApprovalPurchaseRequisition } from '../../interfaces/IPurchaseRequisition';
import AxiosProvider from './axios/axios.provider';
declare class FicoAPI extends AxiosProvider {
    private countryCode;
    constructor();
    setCountryCode(code: string): void;
    getPurchaseRequisition(userAd: string): Promise<IApprovalPurchaseRequisition[]>;
    getPurchaseRequisitionFiles(orderId: string): Promise<IApprovalGenericFile[]>;
    getPurchaseRequisitionFileStream(fileId: string): Promise<IApprovalGenericFileStream>;
    approvalAction(data: IGenericApproval, action: EGenericApprovalAction, userAd: string): Promise<IApprovalAction>;
}
export default FicoAPI;
