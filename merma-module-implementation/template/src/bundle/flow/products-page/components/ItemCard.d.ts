/// <reference types="react" />
import { ItemMeatStock } from '../../../core/client/mass-control-bff-models';
interface IProps {
    item: ItemMeatStock;
    onClick?: () => void;
}
export declare const ItemCard: React.FC<IProps>;
export {};
