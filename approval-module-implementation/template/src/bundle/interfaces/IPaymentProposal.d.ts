export interface IApprovalPaymentProposal {
    category: string;
    type: string;
    country: string;
    paymentDate: string;
    paymentId: string;
    companyCode: string;
    companyName: string;
    companyBank: string;
    accountId: string;
    paymentAmount: number;
    paymentValue: number;
    currency: string;
    paymentForm: string;
    DZLSCH: string;
    ESTADO?: string;
}
