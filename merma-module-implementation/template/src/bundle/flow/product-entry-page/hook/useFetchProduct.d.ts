import { Origin } from "../main";
import { MassControlClient } from "../../../core/client/MassControlClient";
export declare const useFetchProduct: (code: string, massControlClient: MassControlClient, origin: Origin) => {
    fetchProduct: () => Promise<void>;
};
