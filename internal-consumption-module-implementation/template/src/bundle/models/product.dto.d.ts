export interface Product {
    description: string;
    sku: number;
    ean: number;
    um?: string;
    price: number;
    unitCost: number;
    fisicStock: number;
    stockTh: number;
    locationRack: string;
    locationHall: string;
    sectionGroup?: string;
    nextCantProxAbastDesp?: number;
}
