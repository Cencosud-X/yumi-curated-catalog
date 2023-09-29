import { FC } from 'react';
import './Shop.css';
export interface IItemSummary {
    key: string;
    label?: string;
    value: number;
}
export interface ISummaryData {
    data: IItemSummary[];
    type: string;
}
declare const Shop: FC;
export default Shop;
