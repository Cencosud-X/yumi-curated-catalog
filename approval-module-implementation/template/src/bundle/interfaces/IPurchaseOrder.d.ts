export interface IPurchaseOrderItems {
    store: string;
    productId: number;
    productDescription: string;
    quantity: number;
    priceUnit: number;
    priceTotal: number;
    deliveryDate?: string;
}
export interface IApprovalPurchaseOrder {
    category: string;
    type: string;
    country: string;
    createdAt: string;
    orderId: string;
    supplierCod: string;
    supplierName: string;
    createdBy: string;
    termOfPayment: string;
    companyName?: string;
    currency: string;
    orderValue: number;
    items: IPurchaseOrderItems[];
    details?: string[];
}
