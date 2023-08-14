/// <reference types="react" />
interface HeaderProductProps {
    title: string;
    srcImage: string;
    sku?: string;
    ean?: string;
    weight?: number;
    heightImage?: "auto" | "full" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | undefined;
    widthImage?: "auto" | "full" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | undefined;
    fontSizeTitle?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | undefined;
}
export declare const HeaderProduct: React.FC<HeaderProductProps>;
export {};
