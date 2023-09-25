import BaseClient from './base.client';
import { GetSignedUrlResponse, GetDepartamentResponse, GetSectionResponse, GetCategoryResponse, GetDetailResponse } from "../models";
export default class PlanogramClient extends BaseClient {
    getSignedUrl(key: string): Promise<import("axios").AxiosResponse<GetSignedUrlResponse, any>>;
    getDepartaments(key: string): Promise<import("axios").AxiosResponse<GetDepartamentResponse[], any>>;
    getSections(key: string | undefined): Promise<import("axios").AxiosResponse<GetSectionResponse, any>>;
    getCategories(key: string | undefined): Promise<import("axios").AxiosResponse<GetCategoryResponse, any>>;
    getDetails(key: string | undefined): Promise<import("axios").AxiosResponse<GetDetailResponse, any>>;
    sendImplementationPlanogram(key: string | undefined): Promise<import("axios").AxiosResponse<GetDetailResponse, any>>;
}
