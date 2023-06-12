import React from 'react';
import { MeatStocResultkResponse } from 'libs/merma-module-source/src/core/client/models/queries.models';
interface IProps {
    product: MeatStocResultkResponse;
    onClick: Function;
}
declare const ButtonCardInfo: React.FC<IProps>;
export default ButtonCardInfo;
