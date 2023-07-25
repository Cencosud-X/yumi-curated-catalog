/// <reference types="react" />
import { ProductInterface } from '../../../../../../../../core/models';
interface IProps {
    product: ProductInterface | undefined;
    amount: string;
    handleChangeAmount: (data: string) => void;
    errorAmount: string;
}
export declare const FormQuantity: ({ amount, handleChangeAmount, errorAmount, product, }: IProps) => JSX.Element;
export {};
