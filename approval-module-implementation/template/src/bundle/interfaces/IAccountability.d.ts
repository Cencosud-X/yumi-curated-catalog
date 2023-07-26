export interface IApprovalAccountability {
    type: string;
    category: string;
    country?: string;
    orderId: string;
    person: string;
    pernr: string;
    reinr: string;
    startDate?: string;
    endDate?: string;
    observation?: string;
    justification?: string;
    orderValue: number;
    orderValueCurrency: string;
}
