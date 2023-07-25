import { StoreInterface } from './store.interface';
import { StorageInterface } from './storage.interface';
import { ZoneInterface } from './zone.interface';
import { FurnitureInterface } from './furniture.interface';
import { InventoryStatusEnum } from '../enums/inventory-status.enum';
export interface InventoryInterface {
    id: string;
    country: string;
    zonificationCode: string;
    store: StoreInterface;
    storage: StorageInterface;
    zone: ZoneInterface;
    furniture: FurnitureInterface;
    status: InventoryStatusEnum;
    createdUserEmail: string;
    createdUserName: string;
    createdAt: string;
    updatedAt: string;
    updatedUserName: string;
    completedAt: string;
    completedUserName: string;
    totalProduct: number;
}
