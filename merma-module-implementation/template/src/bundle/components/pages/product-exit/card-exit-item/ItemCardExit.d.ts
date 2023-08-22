/// <reference types="react" />
import { ProductsInformation } from '../../../../core/client/mass-control-bff-models';
import { ISubtitlesProductDetailCard } from '../../../../types.d';
interface IProps {
    item: ProductsInformation;
    onHandleCheck: (code: string, value: boolean) => void;
    isSelected?: boolean;
    subtitles: ISubtitlesProductDetailCard[];
}
export declare const ItemCardExit: React.FC<IProps>;
export {};
