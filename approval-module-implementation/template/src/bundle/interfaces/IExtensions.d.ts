import { ReactNode } from 'react';
import { Components } from '../sdk';
export interface IFioriExtension extends Components.IPageExtensions {
    env: {
        country: string;
        approvalFioriApi: string;
        approvalApiKey: string;
        localeDate: string;
    };
}
export interface IFicoExtension extends Components.IPageExtensions {
    env: {
        country: string;
        approvalFicoApi: string;
        approvalApiKey: string;
        localeDate: string;
    };
}
export interface IApprovalCenterExtension extends Components.IPageExtensions {
    env: {
        country: string;
        approvalFicoApi: string;
        approvalFioriApi: string;
        approvalApiKey: string;
        adApi: string;
        adApiKey: string;
    };
    approval_types: ('accountability' | 'fb60' | 'paymentProposal' | 'purchaseOrder' | 'purchaseRequisition')[];
    children?: (props?: any) => ReactNode;
}
export interface IApprovalModuleOverride extends Components.IModuleOverride {
    extensions?: {
        approval_center?: IApprovalCenterExtension;
        purchase_requisition_card?: IFicoExtension;
        purchase_requisition_detail?: IFicoExtension;
        purchase_order_card?: IFioriExtension;
        purchase_order_detail?: IFioriExtension;
        workitem_card?: IFioriExtension;
        workitem_detail: IFioriExtension;
    };
    routes?: Components.IModuleRoute[];
}
