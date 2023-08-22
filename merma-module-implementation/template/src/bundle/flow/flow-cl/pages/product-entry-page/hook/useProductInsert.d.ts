import { MassControlClient } from "../../../../../core/client/MassControlClient";
export declare function useProductInsert(massControlClient: MassControlClient): {
    onFinishEntry: () => Promise<void>;
};
