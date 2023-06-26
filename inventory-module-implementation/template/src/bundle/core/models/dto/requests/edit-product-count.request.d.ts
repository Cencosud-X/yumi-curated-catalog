export interface EditProductCountRequest {
    id: string;
    inventory: {
        sku: string;
        scan_continue?: number;
        scan_quantity?: number;
    };
}
