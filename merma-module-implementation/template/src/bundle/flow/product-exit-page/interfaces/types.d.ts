/// <reference types="react" />
import { ProductsInformation } from "../../../core/client/mass-control-bff-models";
export declare type ItemsInfo = {
    title: string;
    value: string | JSX.Element;
}[];
export declare enum Origin {
    DC = "DC",
    EXTERNAL_PROVIDER = "EXTERNAL_PROVIDER"
}
export declare type ExitCartState = {
    cart: ProductsInformation[];
    allProducts: ProductsInformation[];
    error: boolean;
    isLoading: boolean;
};
export interface IOption {
    label: string;
    value: string;
}
