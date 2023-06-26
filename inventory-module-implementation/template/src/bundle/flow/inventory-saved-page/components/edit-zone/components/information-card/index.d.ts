/// <reference types="react" />
import { InventoryTypeEnum, ProductInterface } from "../../../../../../core/models";
interface IProps {
    product: ProductInterface | undefined;
    inventoryType: InventoryTypeEnum | undefined;
}
export declare const InformationCard: ({ product, inventoryType }: IProps) => JSX.Element;
export {};
