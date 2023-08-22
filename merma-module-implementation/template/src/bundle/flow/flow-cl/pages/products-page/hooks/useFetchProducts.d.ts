/// <reference types="react" />
import { MassControlClient } from "../../../../../core/client/MassControlClient";
export declare const useFetchProducts: (massControlClient: MassControlClient) => {
    products: {
        result: {
            units: number;
            image: string;
            name: string;
            ean: string;
            sku: string;
            totalWeight: number;
            quantityOnWarning: number;
        }[];
    } | undefined;
    isLoading: boolean;
    totalUnist: number;
    error: string | null;
    setError: import("react").Dispatch<import("react").SetStateAction<string | null>>;
    disableButtonTakeOut: boolean;
};
