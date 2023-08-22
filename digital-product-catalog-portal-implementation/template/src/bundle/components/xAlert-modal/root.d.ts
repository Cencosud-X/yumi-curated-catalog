import React from 'react';
export interface IProps {
    visible: boolean;
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
