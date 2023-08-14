/// <reference types="react" />
import { ProductsInformation } from '../../../core/client/mass-control-bff-models';
interface IProps {
    item: ProductsInformation;
    onHandleCheck: (code: string, value: boolean) => void;
    isSelected?: boolean;
}
export declare const ItemCardExit: React.FC<IProps>;
export {};
