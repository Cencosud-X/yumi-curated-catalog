/// <reference types="react" />
import { MassControlClient } from "../../../core/client/MassControlClient";
import { Origin } from "../interfaces/types";
export declare const useFetchProductUnit: (code: string, massControlClient: MassControlClient, origin: Origin) => {
    isLoading: boolean;
    product: {
        price: number;
        ntrStock: number;
        averageSale: number;
        image: string;
        name: string;
        provider: string;
        brand: string;
        ean: string;
        sku: string;
        netWeight: number;
        expirationDate: Date;
        usefulLifeLimit: Date;
        noticeLevel: "info" | "success" | "warning" | "error" | "neutral";
        tally: string;
        usefulLifeDays: number;
    } | null;
    error: boolean;
    setError: import("react").Dispatch<import("react").SetStateAction<boolean>>;
};
