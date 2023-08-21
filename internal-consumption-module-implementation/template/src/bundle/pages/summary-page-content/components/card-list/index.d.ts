/// <reference types="react" />
import { Tabs, TaskCardFields } from '../..';
import { Task } from '../../../../models/task';
interface IProps {
    title: string;
    miniImageUrl: (sku: string, ean: string) => string;
    tabs: any[];
    activeTab: Tabs | undefined;
    cardFields: TaskCardFields;
    tasks: Task[];
    goBack: () => void;
    onCardClick: (task: Task) => void;
    skeleton: boolean;
    loading: boolean;
    onClickTab: (key: string) => void;
    controlTag: boolean;
    showDetails: boolean;
}
declare const CardList: React.FC<IProps>;
export default CardList;
