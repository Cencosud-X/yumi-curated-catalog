/// <reference types="react" />
declare enum ICON {
    YES = "YES",
    NO = "NO",
    NA = "NA"
}
interface IItem {
    key: string;
    title: string;
    icon?: ICON;
    state?: string;
    onClick: () => void;
}
interface IProps {
    items: IItem[];
}
export declare const CardList: React.FC<IProps>;
export {};
