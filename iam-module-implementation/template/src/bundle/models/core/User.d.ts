export interface TModel {
    identifier: string;
    provider: string;
    name: string;
    avatar: string;
    email: string;
    locale: string;
    roles: string[];
    scopes: string[];
    created_at: string;
}
export declare type TUpdateModel = Omit<TModel, 'identifier' | 'provider' | 'created_at'>;
