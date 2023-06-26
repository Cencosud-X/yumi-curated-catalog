import { ZoneInterface } from "../../interfaces/zone.interface";
import { StorageInterface } from "../../interfaces/storage.interface";
import { FurnitureInterface } from "../../interfaces/furniture.interface";
import { BaseResponse } from "./base.response";
import { InventoryStatusEnum } from "../../enums/inventory-status.enum";
export interface CreateInventoryResponse extends BaseResponse {
    data: {
        _id: string;
        code_zonification: string;
        country: string;
        created_at: string;
        created_user_email: string;
        zone: ZoneInterface;
        storage: StorageInterface;
        furniture: FurnitureInterface;
        status: InventoryStatusEnum;
        store: string;
        updated_at: string;
    };
}
