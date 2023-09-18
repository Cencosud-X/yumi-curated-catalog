import { GetCategoriesRequest, GetCategoriesResponse, GetSectionsRequest, GetSectionsResponse, GetStoresRequest, GetStoresResponse, GetStructuresRequest, GetStructuresResponse, PostUploadPlanogramRequest, PostUploadPlanogramResponse, PostValidatePlanogramRequest, PostValidatePlanogramResponse } from '../models';
import BaseClient from './base.client';
export default class PlanogramClient extends BaseClient {
    getStructures(request: GetStructuresRequest): Promise<import("axios").AxiosResponse<GetStructuresResponse, any>>;
    getStores(request: GetStoresRequest): Promise<import("axios").AxiosResponse<GetStoresResponse[], any>>;
    getSections(request: GetSectionsRequest): Promise<import("axios").AxiosResponse<GetSectionsResponse[], any>>;
    getCategories(request: GetCategoriesRequest): Promise<import("axios").AxiosResponse<GetCategoriesResponse[], any>>;
    postValidatePlanogram(request: PostValidatePlanogramRequest[]): Promise<import("axios").AxiosResponse<PostValidatePlanogramResponse[], any>>;
    postUploadPlanogram(request: PostUploadPlanogramRequest): Promise<import("axios").AxiosResponse<PostUploadPlanogramResponse, any>>;
}
