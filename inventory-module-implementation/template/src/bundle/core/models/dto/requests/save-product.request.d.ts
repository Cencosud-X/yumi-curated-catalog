export interface SaveProductRequest {
    inventoryID: string;
    product: {
        ean: string | undefined;
        keySearcher: string | undefined;
        sku: string | undefined;
        description: string | undefined;
        imageUrl: string | undefined;
        uom: string | undefined;
        scanContinue?: number;
        scanQuantity?: number;
        metaData?: any;
    };
}
