/// <reference types="react" />
interface IApprovalItemDetail {
    value: string;
    header: string[];
    subtitle?: string;
    row: Array<{
        label: string;
        value: string | number;
    }>;
}
declare const ApprovalItemDetail: (props: IApprovalItemDetail) => JSX.Element;
export default ApprovalItemDetail;
