import React, { ReactNode } from 'react';
export interface IProps {
    children?: ReactNode;
    visible: boolean;
    type?: 'confirm' | 'success';
    useCancel?: boolean;
    title?: string;
    message?: string;
    cancelText?: string;
    confirmText?: string;
    onClose?: () => void;
    onCancel?: () => void;
    onConfirm?: () => void;
}
declare const XAlertModal: React.FC<IProps>;
export default XAlertModal;
