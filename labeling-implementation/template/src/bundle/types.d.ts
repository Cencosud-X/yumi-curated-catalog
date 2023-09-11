import { HTMLAttributes } from 'react';
import { PrinterStatus, PrinterType } from './core/enums';
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
export interface IPrinter {
    id: string;
    name: string;
    label: string;
    type: PrinterType;
    status: PrinterStatus;
    settings?: {
        printer_mode?: string;
        fleje_type?: string;
    };
    enabled?: boolean;
}
export interface ModuleAction {
    onBootSettings?(parameters?: Partial<ModuleStore>): void;
    onLoad?(parameters?: Partial<ModuleStore>): void;
    onSelectedPrinter?(parameters?: Partial<ModuleStore>): void;
}
export interface ModuleStore {
    path?: string;
    loading?: boolean;
    title?: string;
    country?: string;
    store?: string;
    flag?: string;
    currentUser?: any;
    printers?: IPrinter[];
    selectedPrinter?: IPrinter;
    [key: string]: unknown;
}
export interface IModuleProperties extends HTMLAttributes<ModuleAction>, Partial<ModuleStore> {
}
