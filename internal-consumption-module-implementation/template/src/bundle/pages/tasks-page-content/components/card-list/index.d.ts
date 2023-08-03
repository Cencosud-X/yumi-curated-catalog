/// <reference types="react" />
import { Task } from '../../../../models/task';
import { IRetryAction } from '../../index';
interface IRenderList {
    title: string;
    btnActionText: string;
    loading: boolean;
    goHome: () => void;
    tasks: Task[];
    miniImageUrl: (sku: string, ean: string) => string;
    onSelectCard: (task: Task) => void;
    bulkTaskRequest: (data: IRetryAction[]) => void;
}
export declare type ICardState = 'FREE' | 'REJECT';
declare const CardList: React.FC<IRenderList>;
export default CardList;
