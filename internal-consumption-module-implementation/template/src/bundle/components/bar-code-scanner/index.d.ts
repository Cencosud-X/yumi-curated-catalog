/// <reference types="react" />
interface IProps {
    searchDisabled: boolean;
    onScan?: (code: string) => Promise<void>;
    isCodeValid: (code: string) => boolean;
    autoFocused?: boolean;
}
declare const BarCodeScanner: React.FC<IProps>;
export default BarCodeScanner;
