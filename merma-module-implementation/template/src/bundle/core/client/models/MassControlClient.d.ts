import { InitialConfigResponse, MassControlResponseSchema, MeatStockResponse, ProductStockResponse } from './queries.models';
import { ProductEntryBd, ProductInformationEntryResponse } from './entry-flow.model';
import { ProductExitBd, ProductInformationExitResponse } from './exit-flow.models';
export declare class MassControlClient {
    private url;
    constructor();
    getMeatStock(): Promise<MeatStockResponse>;
    getMassControl(): Promise<MassControlResponseSchema>;
    getProductStock(ean: string): Promise<ProductStockResponse>;
    /**entry-flow */
    getProductInformation(params: {
        tally?: string | undefined;
        barcode?: string | undefined;
    }): Promise<ProductInformationEntryResponse>;
    postProductEntry(product: ProductEntryBd): Promise<void>;
    /**exit-flow */
    getProductInformationExit(params: {
        tally?: string | undefined;
        barcode?: string | undefined;
    }): Promise<ProductInformationExitResponse>;
    postProductExit(product: ProductExitBd): Promise<void>;
    /**initial-config */
    getInitialConfig(): Promise<InitialConfigResponse>;
}
