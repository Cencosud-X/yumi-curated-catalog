import { IStorage } from "./storage.interface";
import { IStore } from "./store.interface";
import { IZone } from "./zone.interface";
export interface IInventory {
    store: IStore;
    zone?: IZone;
    storage?: IStorage;
}
