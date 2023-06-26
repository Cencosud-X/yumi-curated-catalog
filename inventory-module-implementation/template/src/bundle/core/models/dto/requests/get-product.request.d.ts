export interface GetProductRequest {
    store: string;
    data: {
        productInventory: string;
        storage: string;
        key: string;
        type: string;
    };
}
