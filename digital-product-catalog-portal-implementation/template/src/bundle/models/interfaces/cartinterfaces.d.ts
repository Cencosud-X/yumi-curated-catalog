export interface IItemCartCreate {
    ean: string;
    sku: string;
    quantity: number;
    unit: string;
}
export interface ICreateParams {
    cart_details: IItemCartCreate[];
    address: string;
}
