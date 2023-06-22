import { ProductStockUnitsResponse } from '../../../core/client/mass-control-bff-models';
import React from 'react';
interface IProps {
    product: ProductStockUnitsResponse;
    alertType: 'error' | 'info' | 'success' | 'warning' | 'neutral' | undefined;
}
declare const ButtonCardInfoNotImage: React.FC<IProps>;
export default ButtonCardInfoNotImage;
