/// <reference types="react" />
import { MassFlowResponseMovement } from '../../../../core/client/mass-control-bff-models';
import { ISubtitlesProductDetailCard } from '../../../../types';
interface IProps {
    item: MassFlowResponseMovement;
    subtitles: ISubtitlesProductDetailCard[];
    infoBoxElements?: React.ReactNode;
}
export declare const CardEntryInfoMassControl: React.FC<IProps>;
export {};
