export interface ICUser {
    name: string;
    userName: string;
    level: number;
    centers: {
        id: string;
        label: string;
    }[];
}
export declare type UserLevel = 'MANAGER' | 'CONTROL' | 'SELLER';
