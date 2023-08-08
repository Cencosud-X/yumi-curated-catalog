export interface IMenuData {
    id?: string;
    name: string;
    url: string;
    icon?: any;
    submenu?: IMenuData[];
    menu?: any[];
}
export declare const mappingChildrenCategory: (data: any[]) => any[];
