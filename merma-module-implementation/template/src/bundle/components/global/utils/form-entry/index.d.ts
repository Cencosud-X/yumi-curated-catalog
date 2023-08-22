/// <reference types="react" />
interface IProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onHandleCode: (code: string) => void;
    showButtonScanner?: boolean;
    onClickAdd?: () => void;
    onClickScanner?: () => void;
    value?: string;
}
export declare const FormEntry: React.FC<IProps>;
export {};
