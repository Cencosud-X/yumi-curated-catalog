/// <reference types="react" />
interface IProps {
    amount: string;
    handleChangeAmount: (data: string) => void;
    errorAmount: string;
}
export declare const FormContinuos: ({ amount, handleChangeAmount, errorAmount }: IProps) => JSX.Element;
export {};
