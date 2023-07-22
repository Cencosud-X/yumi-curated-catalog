export interface IApprovalSalesProducts {
    _id: string;
    position: string;
    product_id: number;
    product_description: string;
    product_unit: string;
    quantity: number;
    discount_value_unit: number;
    price_unit: number;
    price_total_without_discount: number;
    discount_value: number;
    discount_percent: number;
    price_total_with_discount: number;
}
export interface IApprovalSales {
    _id: string;
    hash: string;
    type: string;
    category: string;
    country: string;
    order_id: string;
    client_id: string;
    client_description: string;
    created_at: Date;
    updated_at: Date;
    created_by: string;
    store: string;
    date_action?: Date | null;
    user_action?: string | null;
    state: "PENDING" | "APPROVED" | "REJECTED";
    products: Array<IApprovalSalesProducts>;
    order_total_without_discount: number;
    order_total_with_discount: number;
    order_total_discount: number;
    order_percent_discount: number;
    isAccountability?: boolean;
    isRetailOrder?: boolean;
    isSaleOrder?: boolean;
    onClick?: () => void;
    onAprroved?: () => void;
    onReject?: () => void;
    onGiveBack?: () => void;
}
