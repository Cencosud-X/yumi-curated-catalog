export interface GetStructuresRequest {
    flag: string;
    store_code: string[];
    section_code: string[];
    category_code: string[];
    status: string[];
    page: number;
    size: number;
    search_text: string;
}
