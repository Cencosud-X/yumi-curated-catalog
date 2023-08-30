import { HTMLAttributes } from 'react';
export interface Filter {
    [key: string]: unknown;
}
export interface Sort {
    [key: string]: unknown;
}
export interface Pagination {
    limit: number;
    offset: number;
    total: number;
}
export interface IRequest {
    url: string;
    method: string;
    body?: unknown;
}
export interface DataSource {
    items: [];
    filters: Filter[];
    sort?: Sort;
    pagination?: Pagination;
}
export interface ModuleAction {
    onBootSettings?(parameters?: Partial<ModuleStore>): void;
    onLoad?(parameters?: Partial<ModuleStore>): void;
}
export interface ModuleStore {
    path?: string;
    loading?: boolean;
    title?: string;
    country?: string;
    store?: string;
    flag?: string;
    currentUser?: any;
    [key: string]: unknown;
}
export interface IModuleProperties extends HTMLAttributes<ModuleAction>, Partial<ModuleStore> {
}
