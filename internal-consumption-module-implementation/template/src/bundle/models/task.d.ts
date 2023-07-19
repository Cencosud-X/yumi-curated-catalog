import { Product } from "./product.dto";
export interface User {
    full_name: string;
}
export interface ControlResponse {
    status: 'APPROVED' | 'REJECTED';
    user: User;
}
export interface TaskMetaData {
    product: Product;
    documentNumber: string;
    controlResponse?: ControlResponse;
    count: number;
}
export interface Task {
    id: string;
    meta_data: TaskMetaData;
    created_by: User;
}
