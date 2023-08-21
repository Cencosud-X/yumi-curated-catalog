import { Product } from "./product.dto";
export interface User {
    full_name: string;
}
export interface ControlResponse {
    status: 'APPROVED' | 'REJECTED';
    user: User;
}
export interface ReleaseResponse {
    documentNumber?: string;
    status: 'APPROVED' | 'REJECTED';
    action_at: string;
    user: User;
}
export interface ReversedResponse {
    documentNumber?: string;
    action_at: string;
    user: User;
}
export interface CostCenter {
    id: string;
    name: string;
}
export interface Create {
    costCenter: CostCenter;
}
export interface NamedStore {
    id: string;
    label: string;
}
export interface TaskMetaData {
    product: Product;
    documentNumber: string;
    controlResponse?: ControlResponse;
    releaseResponse?: ReleaseResponse;
    reversedResponse?: ReversedResponse;
    count: number;
    create: Create;
    store: NamedStore;
    flowToApprove: 'PENDING' | 'REJECTED' | 'APPROVED' | 'REVERSED';
}
export interface Store {
    id: string;
}
export interface Task {
    id: string;
    meta_data: TaskMetaData;
    created_by: User;
    created_at: string;
    store: Store;
    state: 'PENDING' | 'COMPLETED';
}
