/// <reference types="react" />
import { Components } from './sdk';
import ApprovalCenterButton from './components/card-approval';
import ApprovalCardExemple from './components/card-test';
import { IApprovalModuleOverride } from './interfaces/IExtensions';
import ApprovalSettingsClient from './clients/localStorage/localStorage';
import ApprovalItemCard from './components/approval-item-card';
import ApprovalItemDetail from './components/approval-item-detail';
import ApprovalItemDetailFooter from './components/approval-item-detail-footer';
import ApprovalItemExpansionDetail from './components/approval-item-detail-expansion';
import ApprovalItemContentDetail from './components/approval-item-detail-items';
import ApprovalModalError from './components/modal-error';
import ApprovalNotFound from './components/not-found';
export { ApprovalCenterButton, ApprovalSettingsClient, ApprovalCardExemple };
export { ApprovalItemCard, ApprovalItemDetail, ApprovalItemDetailFooter, ApprovalItemExpansionDetail, ApprovalItemContentDetail, ApprovalModalError, ApprovalNotFound, };
export interface IModuleProps extends Components.IModuleProps {
}
export default abstract class ApprovalModule extends Components.Module<IApprovalModuleOverride> {
    static route: string;
    componentDidMount(): void;
    componentWillUnmount(): void;
    constructor(props: IModuleProps, override: IApprovalModuleOverride);
    render(): JSX.Element;
}
