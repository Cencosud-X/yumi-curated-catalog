import { PlanogramInterface } from "./planogram.interface";
export interface DetailInterface {
    id: string;
    country: string;
    store_code: string;
    store_flag: string;
    department_code: string;
    department_name: string;
    section_code: string;
    section_name: string;
    category_code: string;
    category_name: string;
    planogram_format: string;
    created_user_name: string;
    updated_user_name: string;
    created_at: string;
    updated_at: string;
    planogram: PlanogramInterface;
}
