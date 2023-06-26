export interface SaveProductRequest {
    inventoryID: string;
    product: {
        ean: string | undefined;
        keySearcher: string | undefined;
        sku: string | undefined;
        description: string | undefined;
        image_url: string | undefined;
        base_unit: string | undefined;
        scan_continue?: number | undefined;
        scan_quantity?: number | undefined;
        metaData?: any;
    };
}
