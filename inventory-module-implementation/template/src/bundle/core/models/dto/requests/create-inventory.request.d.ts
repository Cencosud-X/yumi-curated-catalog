import { ZoneInterface } from "../../interfaces/zone.interface";
import { StorageInterface } from "../../interfaces/storage.interface";
import { FurnitureInterface } from "../../interfaces/furniture.interface";
export interface CreateInventoryRequest {
    code_zonification: string;
    store: string;
    zone: ZoneInterface;
    storage: StorageInterface;
    furniture: FurnitureInterface;
}
