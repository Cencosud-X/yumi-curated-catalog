export default interface IProduct {
    sku: string;
    ean: string;
    name: string;
    image?: string;
    price_before: number;
    price_now: number;
    price_change_reason: string;
}
