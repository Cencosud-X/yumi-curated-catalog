import { FC, PropsWithChildren } from "react";
import './index.sass';
interface ModalProps {
    height: string;
    title: string;
    message?: string;
    ionIcon?: string;
    svgIcon?: string;
    altText?: string;
    retryMessage?: string;
    cancelMessage?: string;
    onCancel?: () => void;
    onRetry?: () => void;
    displayButtonClose?: boolean;
    cssClass?: string | string[];
}
export declare const Modal: FC<PropsWithChildren<ModalProps>>;
export {};
