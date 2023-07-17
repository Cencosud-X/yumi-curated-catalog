/// <reference types="react" />
interface IProps {
    visible: boolean;
    title: string;
    subTitle: string;
    btnActionText: string;
    onConfirm: () => void;
    onClose: () => void;
}
declare const ConfirmModal: React.FC<IProps>;
export default ConfirmModal;
