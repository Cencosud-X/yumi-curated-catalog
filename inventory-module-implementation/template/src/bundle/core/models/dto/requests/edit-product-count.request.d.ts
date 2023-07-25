export interface EditProductCountRequest {
    id: string;
    inventory: {
        sku: string;
        scanContinue?: number;
        scanQuantity?: number;
    };
}
