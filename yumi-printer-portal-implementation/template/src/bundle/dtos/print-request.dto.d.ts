import { PaperSize, PrintRequestStatusEnum, PrintRequestTypeEnum } from '../enums';
export interface PrintRequestDTO<T = unknown> {
    country: string;
    business_unit: string;
    status: PrintRequestStatusEnum;
    quantity: number;
    store: {
        id: string;
        name: string;
    };
    paper_size: PaperSize;
    created_by: {
        id: string;
        full_name: string;
        email: string;
    };
    type: PrintRequestTypeEnum;
    meta_data: T;
}
