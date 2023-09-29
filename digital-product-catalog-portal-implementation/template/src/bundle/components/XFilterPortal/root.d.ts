import { FC } from 'react';
export interface IOptionFilterSelect {
    key: string;
    label: string;
}
export interface IFilterSelect {
    key: string;
    label: string;
    multiple?: boolean;
    options: IOptionFilterSelect[];
    useSearch?: boolean;
    showDivider?: boolean;
}
declare const Root: FC<{
    activeFilters: {
        [key: string]: any;
    };
    filter: IFilterSelect;
    onFilterClick?: (value: any) => void;
    setActiveFilters: (value: any) => void;
}>;
export default Root;
