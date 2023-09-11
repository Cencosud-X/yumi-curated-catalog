/// <reference types="react" />
interface IOption {
    value: string;
    label: string;
    disabled?: boolean;
    hidden?: boolean;
    selected?: boolean;
    icon?: any;
}
export interface IRadioButtonGroup {
    value: string;
    label: string;
    options: IOption[];
    hidden?: boolean;
}
export interface IProperties {
    onChange: (value: any) => void;
    groups: IRadioButtonGroup[];
}
export declare const GroupRadioButton: React.FC<IProperties>;
export {};
