export interface ProductInterface {
    ean?: string;
    keySearcher?: string;
    sku?: string;
    uom: string;
    description: string;
    quantity: number;
    scanTotal?: number;
    scanTotalContinue?: number;
    scanTotalQuantity?: number;
    scanLastContinue?: number;
    scanLastQuantity?: number;
    imageUrl?: string;
    metaData?: any;
}
