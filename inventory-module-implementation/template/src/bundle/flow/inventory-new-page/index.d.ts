/// <reference types="react" />
import { Components } from '../../sdk';
export interface IInventoryNewPageExtension extends Components.IPageExtensions {
    onBack: () => void;
    white_boxes?: {
        red_box?: React.ComponentClass;
    };
}
export interface IProps extends Components.IPageProps<{}, IInventoryNewPageExtension> {
}
export interface IState {
}
export declare class InventoryNewPage extends Components.Page<IProps, IState> {
    state: IState;
    render(): JSX.Element;
}
