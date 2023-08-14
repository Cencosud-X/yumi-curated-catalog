/// <reference types="react" />
interface IProps {
    handleCaptureCode: (code: string) => void;
    handleFinishProductEntry: () => void;
    handleHelpView: () => void;
}
export declare const CameraScanner: React.FC<IProps>;
export {};
