export interface PurchaseRequisitionProducts {
    productId: string;
    position: string;
    productDescription: string;
    productTotalValue: number;
    productUnitValue: number;
    productCurrency: string;
    quantity: number;
    store: string;
    supplierId: string;
    supplierDescription: string;
    costObject?: string;
    lastApprover?: string;
}
export interface IApprovalPurchaseRequisition {
    type: string;
    category: string;
    country?: string;
    orderId: string;
    createdAt: string | Date;
    products: PurchaseRequisitionProducts[];
    clientDescription: string;
    createdBy: string;
    createdByName?: string;
    orderValue: number;
    orderProductsQuantity: number;
    orderValueCurrency: string;
}
