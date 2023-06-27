/// <reference types="react" />
interface ModalErrorProps {
    onCloseModalError: () => void;
    handleModalErrorActionClick: (key: string) => void;
    description?: string;
}
export declare const ModalError: React.FC<ModalErrorProps>;
export {};
