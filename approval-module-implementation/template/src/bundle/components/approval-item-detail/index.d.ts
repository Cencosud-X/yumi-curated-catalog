interface IApprovalItemDetail {
    value: string;
    header: string[];
    subtitle?: string;
    row: Array<{
        label: string;
        value: string | number;
    }>;
}
declare const ApprovalItemDetail: (props: IApprovalItemDetail) => import("react/jsx-runtime").JSX.Element;
export default ApprovalItemDetail;
