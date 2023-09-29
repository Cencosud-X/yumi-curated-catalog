import { FC } from "react";
import { IFilter } from "../Filter";
export interface IFilterSelected {
    keyParent: string;
    label?: string;
    value: any;
    multiple?: boolean;
    filter: IFilter;
}
interface ISectionFiltersOrderProps {
    loading?: boolean;
    title?: string;
    filters: IFilter[];
    activeFilters?: any;
    activeSort?: any;
    onChangeFilter?: (activeFilters: any) => void;
    onSortHandle?: (filter: any) => void;
}
declare const SectionFiltersOrder: FC<ISectionFiltersOrderProps>;
export default SectionFiltersOrder;
