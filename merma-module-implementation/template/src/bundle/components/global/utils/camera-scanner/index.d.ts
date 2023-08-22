/// <reference types="react" />
interface IProps {
    handleCaptureCode: (code: string) => void;
    handleFinishProductEntry: () => void;
    handleHelpView: () => void;
    onHandleCodeExternalProvider: () => void;
}
export declare const CameraScanner: React.FC<IProps>;
export {};
