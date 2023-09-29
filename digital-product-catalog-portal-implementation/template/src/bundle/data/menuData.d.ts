export interface IMenuData {
    id?: string;
    name: string;
    url: string;
    icon?: any;
    submenu?: IMenuData[];
    level?: number;
    parentId?: number;
    children?: any[];
}
declare type Ancestor = {
    id: number;
    name: string;
};
export declare const mappingChildrenCategory: (data: any[], level?: number, parentId?: number) => any[];
export declare const groupByLevel: (data: any) => any[];
export declare const findAncestors: (item: any, targetId: number, ancestors?: Ancestor[]) => Ancestor[] | null;
export declare const findParentsInRoot: (data: any, targetId: number) => Ancestor[] | null;
export {};
