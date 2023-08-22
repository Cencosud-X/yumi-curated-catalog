import React from 'react';
interface IProps {
    searchDisabled: boolean;
    onScan?: (code: string) => Promise<void>;
    isCodeValid: (code: string) => boolean;
    autoFocused?: boolean;
    focusInput: () => void;
}
declare const BarCodeScanner: React.ForwardRefExoticComponent<IProps & React.RefAttributes<HTMLInputElement>>;
export default BarCodeScanner;
