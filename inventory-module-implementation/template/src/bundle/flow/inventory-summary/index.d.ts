/// <reference types="react" />
import { StoreInterface } from '../../core/models';
import { Components } from '../../sdk';
export interface IInventorySummaryPageExtension extends Components.IPageExtensions {
    onBack: () => void;
    white_boxes?: {
        red_box?: React.ComponentClass;
    };
    triggers: {
        getStoreData: () => Promise<StoreInterface>;
    };
}
export interface IProps extends Components.IPageProps<{}, IInventorySummaryPageExtension> {
}
export interface IState {
}
export declare class InventorySummaryPage extends Components.Page<IProps, IState> {
    state: IState;
    render(): JSX.Element;
}
