export interface IMeatStock {
    result: Result[];
}
export interface Result {
    units: number;
    image: string;
    name: string;
    ean: string;
    sku: string;
    netWeight: number;
    expirationDate: string;
    usefulLifeLimit: string;
    alertType: "info" | "success" | "warning" | "error" | "neutral" | undefined;
}
