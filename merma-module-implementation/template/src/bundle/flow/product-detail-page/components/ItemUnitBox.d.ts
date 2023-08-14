import React from 'react';
import { ProductDetailResponse, ProductStockUnitsResponse } from '../../../core/client/mass-control-bff-models';
interface IProps {
    product: ProductStockUnitsResponse;
    alertType: 'error' | 'info' | 'success' | 'warning' | 'neutral' | undefined;
    productDetail: ProductDetailResponse;
}
declare const ItemUnitBox: React.FC<IProps>;
export default ItemUnitBox;
