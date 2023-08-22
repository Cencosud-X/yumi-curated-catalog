/// <reference types="react" />
import { IOption } from '../interfaces/types';
interface IProps {
    visible: boolean;
    onConfirm: (option: IOption) => void;
    onClose: () => void;
}
export declare const ModalReason: React.FC<IProps>;
export {};
