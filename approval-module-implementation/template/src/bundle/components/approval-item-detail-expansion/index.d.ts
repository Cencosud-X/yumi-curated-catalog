/// <reference types="react" />
interface IApprovalItemDetail {
    loadingDetail: boolean;
    txts?: string[];
    closedTitle: string;
    openedTitle: string;
}
declare const ApprovalItemExpansionDetail: (props: IApprovalItemDetail) => JSX.Element;
export default ApprovalItemExpansionDetail;
