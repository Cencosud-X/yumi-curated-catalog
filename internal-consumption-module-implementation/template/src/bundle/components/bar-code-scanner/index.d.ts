/// <reference types="react" />
interface IProps {
    onScan?: (code: string) => void;
}
declare const BarCodeScanner: React.FC<IProps>;
export default BarCodeScanner;
