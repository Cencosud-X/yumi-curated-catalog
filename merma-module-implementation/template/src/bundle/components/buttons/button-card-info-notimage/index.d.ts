import React from 'react';
import { ProductStockUnitsResponse } from '../../../core/client/models/queries.models';
interface IProps {
    product: ProductStockUnitsResponse;
    alertType: "error" | "info" | "success" | "warning" | "neutral" | undefined;
}
declare const ButtonCardInfoNotImage: React.FC<IProps>;
export default ButtonCardInfoNotImage;
