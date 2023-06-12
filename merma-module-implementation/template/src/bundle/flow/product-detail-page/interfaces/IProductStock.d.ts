export interface IProductStock {
    productDetails: ProductDetails;
    result: Result[];
}
export interface ProductDetails {
    image: string;
    name: string;
    ean: string;
    sku: string;
}
export interface Result {
    usefulLifeLimit: string;
    alertType: "info" | "success" | "warning" | "error" | "neutral" | undefined;
    tally: string;
    ean: string;
    sku: string;
    netWeight: number;
    expirationDate: string;
}
