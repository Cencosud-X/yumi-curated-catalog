import { InitialConfig, MassFlowResponse, MeatStockResponse, ProductEntryBody, ProductExitBody, ProductInfoResponse, ProductStockResponse, ProductUnitInformation } from './mass-control-bff-models';
export declare class MassControlClient {
    private url;
    constructor();
    getMeatStock(): Promise<MeatStockResponse>;
    getMassFlow(): Promise<MassFlowResponse>;
    getProductStock(ean: string): Promise<ProductStockResponse>;
    /**entry-flow */
    getProductInformation(params: {
        tally?: string | undefined;
        barcode?: string | undefined;
    }): Promise<ProductInfoResponse>;
    postProductEntry(product: ProductEntryBody): Promise<void>;
    /**exit-flow */
    getProductInformationExit(params: {
        tally?: string | undefined;
        barcode?: string | undefined;
    }): Promise<ProductUnitInformation>;
    postProductExit(product: ProductExitBody): Promise<void>;
    /**initial-config */
    getInitialConfig(): Promise<InitialConfig>;
}
