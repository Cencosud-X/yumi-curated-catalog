import React from 'react';
export interface IOption {
    key: string;
    label: string;
}
export interface IFilter {
    key: string;
    label: string;
    type?: 'select' | 'search';
    multiple?: boolean;
    useSearch?: boolean;
    options: IOption[];
}
interface IProps {
    loading?: boolean;
    filters: IFilter[];
    selectdFilters?: {
        [key: string]: string;
    };
    onChange?: (activeFilters: any) => void;
    onFilterClick?: (selectedFilter: any) => void;
}
declare const FilterComponent: React.FC<IProps>;
export default FilterComponent;
