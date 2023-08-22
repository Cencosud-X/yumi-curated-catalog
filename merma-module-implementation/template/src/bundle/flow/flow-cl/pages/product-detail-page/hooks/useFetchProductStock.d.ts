/// <reference types="react" />
import { MassControlClient } from "../../../../../core/client/MassControlClient";
export declare const useFetchProductStock: (ean: string, massControlClient: MassControlClient) => {
    productStock: {
        productDetails: {
            image: string;
            name: string;
            ean: string;
            sku: string;
        };
        result: {
            index: number;
            noticeLevel: "error" | "info" | "success" | "warning" | "neutral";
            units: {
                ean: string;
                sku: string;
                usefulLifeLimit: Date;
                usefulLifeDays: number;
                alertType: "warning" | "none" | "danger";
                netWeight: number;
                expirationDate: Date;
                tally?: string | undefined;
                barcode?: string | undefined;
            }[];
            quantityDaysLimit: string;
        }[];
    } | null;
    isLoading: boolean;
    error: boolean;
    setError: import("react").Dispatch<import("react").SetStateAction<boolean>>;
};
