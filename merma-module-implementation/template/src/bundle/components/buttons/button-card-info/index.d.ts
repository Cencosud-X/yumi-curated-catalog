import { MeatStockItemResponse } from '../../../core/client/mass-control-bff-models';
import React from 'react';
interface IProps {
    product: MeatStockItemResponse;
    onClick: Function;
}
declare const ButtonCardInfo: React.FC<IProps>;
export default ButtonCardInfo;
