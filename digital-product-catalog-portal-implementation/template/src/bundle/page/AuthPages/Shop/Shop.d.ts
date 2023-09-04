import { FC } from 'react';
import './Shop.css';
import { IFilter } from '../../../components/Filter';
export interface IFilterSelected {
    keyParent: string;
    label?: string;
    value: any;
    multiple?: boolean;
    filter: IFilter;
}
declare const Shop: FC;
export default Shop;
