/// <reference types="react" />
import { IMenuData } from '../../data/menuData';
export interface IDrawerCategories {
    mountNode?: HTMLElement | null | any;
}
export interface ICategoryItem {
    category: IMenuData;
    key?: any;
    isActive?: boolean;
    onItemSelected?: (link: any) => void;
    onItemHover?: (show: boolean, link?: any) => void;
}
declare const _default: import("react").NamedExoticComponent<IDrawerCategories>;
export default _default;
