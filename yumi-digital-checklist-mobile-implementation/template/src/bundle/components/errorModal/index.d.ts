import React from 'react';
import { ERROR_TYPES } from '../../dtos/error-types.enum';
interface IProps {
    type?: ERROR_TYPES;
    onClose: () => void;
    onActionClick: () => void;
}
export declare const ErrorModal: React.FC<IProps>;
export {};
