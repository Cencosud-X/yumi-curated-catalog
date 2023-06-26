import { StoreInterface } from './store.interface';
import { StorageInterface } from './storage.interface';
import { ZoneInterface } from './zone.interface';
import { FurnitureInterface } from "./furniture.interface";
import { InventoryStatusEnum } from "../enums/inventory-status.enum";
export interface InventoryInterface {
    id: string;
    country: string;
    code_zonification: string;
    store: StoreInterface;
    storage: StorageInterface;
    zone: ZoneInterface;
    furniture: FurnitureInterface;
    status: InventoryStatusEnum;
    user_email: string;
    user_name: string;
    created_at: string;
    updated_at: string;
    completed_at: string;
    updated_user_name: string;
    totalProduct: number;
}
