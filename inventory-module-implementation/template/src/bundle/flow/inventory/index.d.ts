/// <reference types="react" />
import { Components } from '../../sdk';
export interface IInventoryPageExtension extends Components.IPageExtensions {
    onBack: () => void;
    white_boxes?: {
        red_box?: React.ComponentClass;
    };
}
export interface IProps extends Components.IPageProps<{}, IInventoryPageExtension> {
}
export interface IState {
}
export declare class InventoryPage extends Components.Page<IProps, IState> {
    state: IState;
    render(): JSX.Element;
}
