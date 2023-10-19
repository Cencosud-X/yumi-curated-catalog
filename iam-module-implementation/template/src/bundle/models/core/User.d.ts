export interface TModel {
    identifier: string;
    provider: string;
    name: string;
    avatar: string;
    email: string;
    locale: string;
    scopes: string[];
    roles: string[];
    created_at: string;
}
export declare type TUpdateModel = Omit<TModel, 'identifier' | 'provider' | 'created_at'>;
