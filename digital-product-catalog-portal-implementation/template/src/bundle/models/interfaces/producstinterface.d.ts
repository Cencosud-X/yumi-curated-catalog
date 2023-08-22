export interface IProduct {
    id: string;
    name: string;
    description: string;
    category: string;
    urlImage: string;
    brandName: string;
    ean: string;
    sku: string;
    inStock: boolean;
    price: number;
    quantity: number;
    metadata?: any;
}
