/// <reference types="react" />
interface IFormProps {
    itemsInfo: {
        title: string;
        value: string | React.ReactNode;
    }[];
}
export declare const ProductDetails: React.FC<IFormProps>;
interface ItemBoxProps {
    title: string;
    value: string | React.ReactNode;
}
export declare const ItemBox: React.FC<ItemBoxProps>;
export {};
