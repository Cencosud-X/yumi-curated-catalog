import { PlanogramsPagesEnum } from '../models';
export declare const usePlanogram: () => {
    country: string;
    page: PlanogramsPagesEnum;
    routeToLoadSectionList: () => void;
    routeToLoadCategoryList: () => void;
    routeToLoadCategoryDetail: () => void;
};
