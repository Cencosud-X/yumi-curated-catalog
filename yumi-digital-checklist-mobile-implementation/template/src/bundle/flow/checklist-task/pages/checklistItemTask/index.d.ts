/// <reference types="react" />
import { ICountItem } from '../../../../dtos';
interface IProps {
    onClick: (item: ICountItem) => void;
}
export declare const ChecklistItemsTask: React.FC<IProps>;
export {};
