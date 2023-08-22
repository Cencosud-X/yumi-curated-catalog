/// <reference types="react" />
import { ISubtitlesProductDetailCard } from '../../../../types';
interface IInfoBox {
    title: string;
    subtitle: string;
}
interface ProductDetailsCardProps {
    title: string;
    srcImage: string;
    infoBoxs?: IInfoBox[];
    heightImage?: 'auto' | 'full' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | undefined;
    widthImage?: 'auto' | 'full' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | undefined;
    fontSizeTitle?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | undefined;
    subtitles?: ISubtitlesProductDetailCard[];
    heightTitleSubtitleBox?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | undefined;
}
export declare const ProductDetailsCard: React.FC<ProductDetailsCardProps>;
export {};
