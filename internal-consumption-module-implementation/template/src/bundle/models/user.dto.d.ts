/**
 * Module User interface
 */
export interface ICUser {
    name: string;
    userName: string;
    /**
     * 0: CREATOR
     * 1: CONTROL
     * 2: REVISOR
     */
    level: number;
    centers: {
        id: string;
        label: string;
    }[];
}
export declare type UserLevel = 'REVISOR' | 'CONTROL' | 'CREATOR';
