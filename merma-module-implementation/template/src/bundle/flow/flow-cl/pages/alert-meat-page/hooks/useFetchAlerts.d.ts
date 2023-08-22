/// <reference types="react" />
import { AlertServiceClient } from "../../../../../core/client/AlertServiceClient";
import { MassControlClient } from "../../../../../core/client/MassControlClient";
export declare const useFetchAlerts: (alertServiceClient: AlertServiceClient, massControlClient: MassControlClient) => {
    alerts: {
        primarysid: string;
        state: "PENDING" | "ON_PROGRESS" | "COMPLETED";
        country: string;
        local: string;
        createdAt: Date;
        updatedAt: Date;
        ean: string;
        product: {
            ean: string;
            price: number;
            ntrStock: number;
            averageSale: number;
            image: string;
            name: string;
            provider: string;
            brand: string;
            sku: string;
            netWeight: number;
            expirationDate: Date;
            usefulLifeLimit: Date;
            noticeLevel: "info" | "success" | "warning" | "error" | "neutral";
            tally: string;
            usefulLifeDays: number;
        };
        tally?: string | undefined;
        barcode?: string | undefined;
    }[];
    isLoading: boolean;
    showModalError: boolean;
    setShowModalError: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    setError: import("react").Dispatch<import("react").SetStateAction<boolean>>;
};
