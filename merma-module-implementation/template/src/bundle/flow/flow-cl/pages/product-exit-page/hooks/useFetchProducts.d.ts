/// <reference types="react" />
import { MassControlClient } from "../../../../../core/client/MassControlClient";
export declare const useFetchProducts: (massControlClient: MassControlClient) => {
    isLoading: boolean;
    error: boolean;
    setError: import("react").Dispatch<import("react").SetStateAction<boolean>>;
};
