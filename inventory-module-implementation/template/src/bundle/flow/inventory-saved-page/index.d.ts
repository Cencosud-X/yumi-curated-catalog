/// <reference types="react" />
import { StoreInterface } from '../../core/models';
import { Components } from '../../sdk';
export interface IInventorySavedPageExtension extends Components.IPageExtensions {
    onBack: () => void;
    white_boxes?: {
        red_box?: React.ComponentClass;
    };
    triggers: {
        getStoreData: () => Promise<StoreInterface>;
    };
}
export interface IProps extends Components.IPageProps<{}, IInventorySavedPageExtension> {
}
export interface IState {
}
export declare class InventorySavedPage extends Components.Page<IProps, IState> {
    state: IState;
    render(): JSX.Element;
}
