/// <reference types="react" />
import { MermaContextType } from '../../core/context/MermaContext';
import { Components } from '../../sdk';
export interface IProductsPageExtension extends Components.IPageExtensions {
    white_boxes: {
        red_box: React.ComponentClass;
    };
    triggers: {
        get_user_token: () => Promise<string>;
    };
}
export interface IProps extends Components.IPageProps<{}, IProductsPageExtension> {
}
export interface IState {
}
export declare class ProductsPage extends Components.Page<IProps, IState> {
    static contextType: React.Context<MermaContextType>;
    state: IState;
    constructor(props: IProps);
    componentDidMount(): Promise<void>;
    render(): JSX.Element;
}
