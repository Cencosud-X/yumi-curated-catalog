import { InitialConfig, MassFlowResponse, MeatStockResponse, ProductEntryBody, ProductExitBody, ProductInfoResponse, ProductStockResponse, ProductUnitInformation, ProductsInformationResponse } from './mass-control-bff-models';
import { BarcodeExtractorResponse } from './mass-control-bff-models/barcode-extractor.models';
export declare class MassControlClient {
    private baseUrl;
    private token;
    private headers;
    constructor(token: string, baseUrl: string);
    getMeatStock(): Promise<MeatStockResponse>;
    getMassFlow(action: string): Promise<MassFlowResponse>;
    getProductStock(ean: string): Promise<ProductStockResponse>;
    /**entry-flow */
    getProductInformationDC(tally: string): Promise<ProductInfoResponse>;
    getProductInformationExternalProvider(barcode: string, expirationDate: string): Promise<ProductInfoResponse>;
    postProductEntry(product: ProductEntryBody[]): Promise<void>;
    /**exit-flow */
    getProductUnitInformationExit(params: {
        tally?: string | undefined;
        barcode?: string | undefined;
    }): Promise<ProductUnitInformation>;
    postProductExit(product: ProductExitBody[]): Promise<void>;
    getProductsInformationExit(): Promise<ProductsInformationResponse>;
    getBarcode(imageBase64: string): Promise<BarcodeExtractorResponse>;
    /**initial-config */
    getInitialConfig(): Promise<InitialConfig>;
}
