/// <reference types="react" />
interface IProps {
    title: string;
    onHandleCode: (code: string) => void;
    onBack: () => void;
}
export declare const ManualMode: React.FC<IProps>;
export {};
