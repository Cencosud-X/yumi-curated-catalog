import React from 'react';
import './index.sass';
interface IProps {
    onBack: () => void;
    callback: (code: string) => void;
}
declare const BarCodeScannerComponent: React.FC<IProps>;
export default BarCodeScannerComponent;
