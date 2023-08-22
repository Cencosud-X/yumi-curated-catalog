import { Origin } from "../pages/product-exit-page/interfaces/types";
import { ICodeParams, TallyData } from "../../../types";
export declare function useCompositionTallyData(code: ICodeParams): {
    origin: Origin;
    tallyData: TallyData | undefined;
    updateTallyCompositionData: (data: TallyData) => void;
};
