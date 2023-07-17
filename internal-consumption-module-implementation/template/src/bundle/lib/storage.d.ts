import { CostCenter } from '../models/cost-center.dto';
import { Declaration } from '../models/declaration';
export declare class Storage {
    getAll(): Declaration[];
    getMetaData(): CostCenter | undefined;
    set(items: Declaration[], metaData: any): void;
    add(item: Declaration, metaData: any): void;
    update(item: Declaration): void;
    clear(): void;
}
export declare const StorageInstance: Storage;
