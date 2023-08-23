/// <reference types="react" />
import { IProductsPageExtension } from '../../../../core/interfaces';
import { MermaContextType } from '../../../../core/context/merma-context/MermaContext';
import { Components } from '../../../../sdk';
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
