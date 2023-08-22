import { MassControlClient } from '../../../../../core/client/MassControlClient';
import { Origin } from '../main';
export declare function useProductSearch(massControlClient: MassControlClient, origin: Origin): {
    searchProduct: (code: string, expirationDate?: string) => Promise<void>;
};
