import React from 'react';
interface IProps {
    name: string;
    srcImage: string;
    sku: string;
    totalWeight: number;
    totalBoxes: number;
}
declare const ProductInfoHeader: React.FC<IProps>;
export default ProductInfoHeader;
