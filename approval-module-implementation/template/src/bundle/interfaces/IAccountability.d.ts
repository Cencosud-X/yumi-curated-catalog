export interface IApprovalAccFile {
    fileId: string;
    fileName: string;
    fileMime: string;
}
export interface IAccFileStreamDto {
    type: string;
    data: ArrayBuffer;
}
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
