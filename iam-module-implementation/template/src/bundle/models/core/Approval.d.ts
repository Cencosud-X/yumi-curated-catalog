import * as SDK from '@team_yumi/sdk';
interface IJwtEntity extends SDK.Models.IAM.IJwtEntity {
    roles: string[];
}
export interface TModel {
    id: string;
    state: 'PENDING' | 'COMPLETED' | 'REJECTED';
    country: string;
    flag: string;
    store: string;
    user: IJwtEntity;
    updated_at: string;
    created_at: string;
}
export declare type TCreateModel = Omit<TModel, 'id' | 'state' | 'updated_at' | 'created_at'>;
export declare type TUpdateModel = Omit<TModel, 'id' | 'updated_at' | 'created_at'>;
export {};
