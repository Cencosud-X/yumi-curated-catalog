/// <reference types="react" />
import { IModalError } from '../../interfaces/IApprovalTypes';
declare const ModalError: (props: {
    title: string;
    modalError: IModalError;
    setModalError: (modalError: IModalError) => void;
}) => JSX.Element;
export default ModalError;
