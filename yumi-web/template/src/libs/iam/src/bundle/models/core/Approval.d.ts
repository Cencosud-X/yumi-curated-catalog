import * as SDK from '@team_yumi/sdk';
export interface TModel {
    id: string;
    state: 'PENDING' | 'COMPLETED' | 'REJECTED';
    country: string;
    flag: string;
    store: string;
    user: SDK.Models.IAM.IJwtEntity;
    updated_at: string;
    created_at: string;
}
export declare type TCreateModel = Omit<TModel, 'id' | 'state' | 'updated_at' | 'created_at'>;
export declare type TUpdateModel = Omit<TModel, 'id' | 'updated_at' | 'created_at'>;
