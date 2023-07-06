import * as User from './User';
export interface TModel {
    id: string;
    state: 'PENDING' | 'COMPLETED' | 'REJECTED';
    country: string;
    flag: string;
    store: string;
    user: User.TModel;
    updated_at: string;
    created_at: string;
}
export declare type TCreateModel = Omit<TModel, 'id' | 'state' | 'updated_at' | 'created_at'>;
export declare type TUpdateModel = Omit<TModel, 'id' | 'updated_at' | 'created_at'>;
