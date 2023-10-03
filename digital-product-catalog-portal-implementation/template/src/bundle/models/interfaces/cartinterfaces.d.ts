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
export interface IResponseHistoryRequest {
    data: ICartRequest[];
    total: number;
    hasNext: boolean;
}
export interface ICartRequest {
    _id: string;
    user_id: string;
    company_id: string;
    seller_id: SellerId;
    office_id: string;
    cart_details: ICartDetail[] | ICartDetailExtended[];
    address: string;
    status: string;
    is_active: boolean;
    created_at: string;
    updated_at: string;
    url?: string;
    __v: number;
    total_products: number;
}
export interface SellerId {
    _id: string;
    identification_id: string;
    companies: string[];
    created_at: string;
    email: string;
    full_name: string;
    is_active: boolean;
    updated_at: string;
    logged_in: boolean;
}
export interface ICartDetail {
    ean: string;
    sku: string;
    quantity: number;
    unit: string;
}
export interface ICartDetailExtended extends ICartDetail {
    id: string;
    name: string;
    description: string;
    urlImageOTher: any[];
    brandName: string;
    inStock: boolean;
    price: number;
    longName: string;
    measurement: Measurement;
    saleUnit: string;
    hierarchy: any[];
    quantity: number;
    unit: string;
}
export interface Measurement {
    weight: Weight;
}
export interface Weight {
    netWeight: number;
}
