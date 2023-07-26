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
        icon: 'check-bold' | 'trash-outline' | 'refuse-extrabold' | 'x-outline' | 'close-outline';
        onClick: React.MouseEventHandler<HTMLButtonElement>;
    }>;
    onClick: () => void;
}
declare const ApprovalItemCard: (props: IApprovalItemCard) => import("react/jsx-runtime").JSX.Element;
export default ApprovalItemCard;
