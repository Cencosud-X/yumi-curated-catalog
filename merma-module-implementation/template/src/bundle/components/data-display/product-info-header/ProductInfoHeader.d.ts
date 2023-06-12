import React from 'react';
interface IProps {
    name: string;
    srcImage: string;
    sku: string;
    totalWeight: number;
    totalBoxes: number;
}
declare const ProductInfoHeder: React.FC<IProps>;
export default ProductInfoHeder;
