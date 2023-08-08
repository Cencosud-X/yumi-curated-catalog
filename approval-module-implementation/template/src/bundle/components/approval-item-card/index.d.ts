/// <reference types="react" />
interface IApprovalItemCard {
    value: string;
    title?: string;
    header: string[];
    subtitle?: string;
    row: Array<{
        label: string;
        value: string | number;
    }>;
    key: number;
    buttons: Array<{
        size: 's' | 'xl' | 'xs' | 'm' | 'l' | undefined;
        type: 'solid' | 'tonal';
        icon: 'check-bold' | 'trash-outline' | 'corner-up-left-outline' | 'x-outline' | 'close-outline';
        onClick: React.MouseEventHandler<HTMLButtonElement>;
    }>;
    onClick?: () => void;
    seeMoreTitle?: string;
}
declare const ApprovalItemCard: (props: IApprovalItemCard) => JSX.Element;
export default ApprovalItemCard;
