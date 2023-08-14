import { CartState } from '../../../flow/product-entry-page/context/cartReducer';
import { FC } from 'react';
interface IProps {
    handleCaptureCode: (code: string) => void;
    handleFinishProductEntry: () => void;
    state?: CartState;
}
export declare const ScannerBarcode: FC<IProps>;
export {};
