import { Origin } from "../main";
import { MassControlClient } from "../../../../../core/client/MassControlClient";
export declare function useProductHandleCode(massControlClient: MassControlClient): {
    handleCode: (newCode: string, callback: () => void) => void;
    origin: Origin;
};
