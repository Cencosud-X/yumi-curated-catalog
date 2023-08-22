/// <reference types="react" />
import { MassControlClient } from '../../../../../core/client/MassControlClient';
import { Action } from '../interfaces/IMassControl';
export declare const useFetchMassControl: (massControlClient: MassControlClient, key: Action) => {
    isLoading: boolean;
    massControl: {
        result: {
            movementType: "entry" | "exit";
            movementDate: Date;
            image: string;
            name: string;
            responsible: string;
            netWeight: number;
            expirationDate: Date;
            usefulLifeLimit: Date;
            usefulLifeDays: number;
            alertType: "error" | "info" | "success" | "warning" | "neutral";
            tally?: string | undefined;
            barcode?: string | undefined;
            exitReason?: string | undefined;
            movementEntryDate?: Date | undefined;
        }[];
    } | undefined;
    error: boolean;
    setError: import("react").Dispatch<import("react").SetStateAction<boolean>>;
};
