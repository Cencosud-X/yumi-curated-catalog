import AxiosProvider from './providers/axios.provider';
import { CreateInventoryRequest, CreateInventoryResponse, EditProductCountRequest, EditProductCountResponse, FinishInventoryRequest, FinishInventoryResponse, GetProductRequest, GetProductResponse, GetTotalFurnitureRequest, GetTotalFurnitureResponse, GetZonificationRequest, GetZonificationResponse, GetZonificationSavedRequest, SaveProductRequest, SaveProductResponse } from '../models';
import { GetFiltersZonificationResponse } from '../models/dto/responses/get-filters-zonification.response';
import { GetSendInventoryResponse } from '../models/dto/responses/get-send-inventorys.response';
declare class InventoryAPI extends AxiosProvider {
    private countryCode;
    constructor();
    setCountryCode(code: string): void;
    getZonification(request: GetZonificationRequest): Promise<GetZonificationResponse>;
    createInventory(request: CreateInventoryRequest): Promise<CreateInventoryResponse>;
    getProduct(request: GetProductRequest): Promise<GetProductResponse>;
    saveProduct(request: SaveProductRequest): Promise<SaveProductResponse>;
    finishInventory(request: FinishInventoryRequest): Promise<FinishInventoryResponse>;
    getTotalFurniture(request: GetTotalFurnitureRequest): Promise<GetTotalFurnitureResponse>;
    getAllZonificationsSaved(request: GetZonificationSavedRequest): Promise<GetZonificationResponse>;
    getAllZonificationsInProgress(request: GetZonificationSavedRequest): Promise<GetZonificationResponse>;
    getFiltersByZonification(request: any): Promise<GetFiltersZonificationResponse>;
    getProductsByZonificationSaved(request: any): Promise<GetFiltersZonificationResponse>;
    sendProductsBySavedZonification(request: any): Promise<GetSendInventoryResponse>;
    editProductCount(request: EditProductCountRequest): Promise<EditProductCountResponse>;
}
declare const inventoryAPI: InventoryAPI;
export default inventoryAPI;
