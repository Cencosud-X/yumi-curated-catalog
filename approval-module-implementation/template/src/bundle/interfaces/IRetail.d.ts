export interface IApprovalRetailProducts {
    _id: string;
    product_id: number;
    product_description: string;
    product_unit: string;
    quantity: number;
    price_unit: number;
    price_total: number;
}
export interface IApprovalRetailApprovers {
    _id: string;
    code: string;
    user_ad: string;
}
export interface IApprovalRetail {
    _id: string;
    hash: string;
    type: string;
    category: string;
    country: string;
    order_id: string;
    order_quantity_products: number;
    order_value: number;
    client_id: string;
    client_description: string;
    created_at: Date;
    updated_at: Date;
    created_by: string;
    store: string;
    exported_at: Date;
    shipping_date: Date;
    dde_order: string;
    dde_current: string;
    date_action?: Date | null;
    user_action?: string | null;
    filename: string;
    payment_condition: string;
    state: "PENDING" | "APPROVED" | "REJECTED";
    approvers: Array<IApprovalRetailApprovers>;
    products: Array<IApprovalRetailProducts>;
    isAccountability?: boolean;
    isRetailOrder?: boolean;
    isSaleOrder?: boolean;
    onClick?: () => void;
    onAprroved?: () => void;
    onReject?: () => void;
    onGiveBack?: () => void;
}
