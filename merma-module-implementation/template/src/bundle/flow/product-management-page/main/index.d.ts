/// <reference types="react" />
export declare type modeType = 'MODAL_ERROR' | 'PAGE_LOADED' | 'SHOW_FORM_ENTRY_DC' | 'SHOW_FORM_ENTRY_EXTERNAL_PROVIDER' | 'SHOW_FORM_EXIT';
export declare enum Origin {
    DC = "DC",
    EXTERNAL_PROVIDER = "EXTERNAL_PROVIDER"
}
interface IAddProductMainProps {
    action: string;
}
export declare const ProductManagementMain: React.FC<IAddProductMainProps>;
export {};
