import React from 'react';
import * as Models from '../../models';
export interface IProps {
    visible: boolean;
    values?: Models.ITwoOption[];
    title?: string;
    subtitle?: string;
    twoSubtitle?: string;
    options: Models.ITwoOption[];
    onChange?: (values: Models.ITwoOption[]) => void;
    onClose?: () => void;
}
declare const XTwoSelectMultiple: React.FC<IProps>;
export default XTwoSelectMultiple;
