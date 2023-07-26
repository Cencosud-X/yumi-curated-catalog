interface IApprovalItemDetail {
    buttons: Array<{
        size: 's' | 'xl' | 'xs' | 'm' | 'l' | undefined;
        text: string;
        type: 'solid' | 'tonal';
        icon: 'check-outline' | 'trash-outline' | 'refuse-extrabold' | 'x-outline';
        onClick: () => void;
    }>;
}
declare const ApprovalItemDetailFooter: (props: IApprovalItemDetail) => import("react/jsx-runtime").JSX.Element;
export default ApprovalItemDetailFooter;