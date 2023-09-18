export default interface StructureInterface {
    category_code: string;
    category_name: string;
    country: string;
    created_at: string;
    created_user_name: string;
    department_code: string;
    department_name: string;
    id: string;
    planogram_format: string;
    section_code: string;
    section_name: string;
    store_code: string;
    store_flag: string;
    updated_at: string;
    planogram: {
        status: string;
    };
}
