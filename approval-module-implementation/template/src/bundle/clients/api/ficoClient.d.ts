import { IApprovalPurchaseRequisition, IApprovalPurchaseRequisitionFile, IApprovalPurchaseRequisitionFileStream } from '../../interfaces/IPurchaseRequisition';
import AxiosProvider from './axios/axios.provider';
declare class FicoAPI extends AxiosProvider {
    private countryCode;
    constructor();
    setCountryCode(code: string): void;
    getPurchaseRequisition(userAd: string): Promise<IApprovalPurchaseRequisition[]>;
    getPurchaseRequisitionFiles(orderId: string): Promise<IApprovalPurchaseRequisitionFile[]>;
    getPurchaseRequisitionFileStream(fileId: string): Promise<IApprovalPurchaseRequisitionFileStream>;
}
export default FicoAPI;
