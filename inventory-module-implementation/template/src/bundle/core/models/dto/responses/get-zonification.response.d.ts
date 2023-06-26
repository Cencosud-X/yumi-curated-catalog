import { ZoneInterface } from "../../interfaces/zone.interface";
import { StorageInterface } from "../../interfaces/storage.interface";
import { FurnitureInterface } from "../../interfaces/furniture.interface";
import { BaseResponse } from "./base.response";
export interface GetZonificationResponse extends BaseResponse {
    data: {
        zone: ZoneInterface;
        storage: StorageInterface;
        furniture: FurnitureInterface;
    };
}
