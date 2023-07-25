export interface GetProductRequest {
    store: string;
    data: {
        productInventoryId: string;
        storage: string;
        key: string;
        type: string;
    };
}
