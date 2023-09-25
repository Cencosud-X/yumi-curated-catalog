import { StoreInterface } from "./store.interface";
export default interface IStaticParams {
    country: string;
    baseUrl: string;
    getStoreData: () => Promise<StoreInterface>;
}
