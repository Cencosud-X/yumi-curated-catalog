/// <reference types="react" />
interface IApprovalItemDetail {
    homeLabel: string;
    onClick: () => void;
    buttons: Array<{
        text: string;
        icon: 'check-outline' | 'trash-outline' | 'corner-up-left-outline' | 'x-outline';
        onClick: () => void;
    }>;
}
declare const ApprovalItemDetailFooter: (props: IApprovalItemDetail) => JSX.Element;
export default ApprovalItemDetailFooter;
