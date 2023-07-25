import { ZoneInterface } from '../../interfaces/zone.interface';
import { StorageInterface } from '../../interfaces/storage.interface';
import { FurnitureInterface } from '../../interfaces/furniture.interface';
import { BaseResponse } from './base.response';
import { InventoryStatusEnum } from '../../enums/inventory-status.enum';
export interface CreateInventoryResponse extends BaseResponse {
    data: {
        _id: string;
        zonificationCode: string;
        country: string;
        createdAt: string;
        createdUserEmail: string;
        zone: ZoneInterface;
        storage: StorageInterface;
        furniture: FurnitureInterface;
        status: InventoryStatusEnum;
        store: string;
        updatedAt: string;
    };
}
