/// <reference types="react" />
interface IProps {
    visible: boolean;
    title: string;
    subTitle?: string;
    btnActionText: string;
    onConfirm: () => void;
    onClose: () => void;
    ImageCmp: React.ReactElement;
}
declare const ConfirmModal: React.FC<IProps>;
export default ConfirmModal;
