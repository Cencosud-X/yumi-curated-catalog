/// <reference types="react" />
interface ICardExtendedProps {
    nameGroup: string;
    furniture: string;
    skuCount: number;
    selected: (e: any) => void;
    onToggle: (e: boolean) => Promise<any[]>;
    onClickProduct: () => void;
}
export declare const CardExtendedComponent: ({ nameGroup, furniture, skuCount, selected, onToggle, onClickProduct, }: ICardExtendedProps) => JSX.Element;
export {};
