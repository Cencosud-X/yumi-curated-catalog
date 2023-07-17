/// <reference types="react" />
interface IProps {
    searchDisabled: boolean;
    onScan?: (code: string) => void;
}
declare const BarCodeScanner: React.FC<IProps>;
export default BarCodeScanner;
