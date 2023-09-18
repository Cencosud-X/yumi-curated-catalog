import { BaseResponse } from './base.response';
import StructureInterface from "../../interfaces/structure.interface";
export interface GetStructuresResponse extends BaseResponse {
    data: StructureInterface[];
    page: number;
    size: number;
    total_rows: number;
    total_pages: number;
}
