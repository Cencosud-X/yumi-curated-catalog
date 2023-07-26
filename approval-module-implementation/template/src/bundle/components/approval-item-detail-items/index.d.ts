interface IApprovalItemDetail {
    value: string;
    header: Array<string | number>;
    row: Array<{
        label: string;
        value: string | number;
    }>;
    key: number;
}
declare const ApprovalItemContentDetail: (props: IApprovalItemDetail) => import("react/jsx-runtime").JSX.Element;
export default ApprovalItemContentDetail;
