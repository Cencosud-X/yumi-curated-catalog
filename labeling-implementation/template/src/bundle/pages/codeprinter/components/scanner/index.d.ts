import React from 'react';
interface IProps {
    searchDisabled: boolean;
    onScan?: (code: string) => Promise<void>;
    autoFocused?: boolean;
    focusInput: () => void;
}
declare const BarCodeScanner: React.ForwardRefExoticComponent<IProps & React.RefAttributes<HTMLInputElement>>;
export default BarCodeScanner;
