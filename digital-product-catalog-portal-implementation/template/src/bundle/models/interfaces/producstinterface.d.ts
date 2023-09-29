export interface IProduct {
    id: string;
    name: string;
    longName?: string;
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
    hierarchy?: string[];
    specification?: ISpecifications[];
    saleUnit?: string;
    stock?: string;
    urlImageOTher?: string[];
}
export interface ISpecificationsMapped {
    fieldGroup: string;
    value: ISpecifications[];
}
export interface ISpecifications {
    fieldName: string;
    fieldGroupName: string;
    fieldValues: string[];
    fieldValueIds: number[];
    fieldId: string;
    isFilter?: boolean;
}
