export interface ProductInterface {
    ean?: string;
    keySearcher?: string;
    sku?: string;
    base_unit: string;
    description: string;
    total: number;
    quantity: number;
    last_quantity: number;
    scan_total?: number;
    scan_continue?: number;
    scan_quantity?: number;
    scan_last_continue?: number;
    scan_last_quantity?: number;
    image_url?: string;
    metaData?: any;
}
