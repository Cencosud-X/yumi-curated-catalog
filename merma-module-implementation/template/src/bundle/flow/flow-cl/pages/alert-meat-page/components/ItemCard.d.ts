/// <reference types="react" />
import { ProductUnitInformation } from '../../../../../core/client/mass-control-bff-models';
interface IItemCardProps {
    product: ProductUnitInformation;
    onClick: () => void;
}
export declare const ItemCard: React.FC<IItemCardProps>;
export {};
