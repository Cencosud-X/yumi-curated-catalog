/// <reference types="react" />
import { Components } from '../../sdk';
import { MermaContextType } from '../../core/context/MermaContext';
import { MeatStockResponse } from '../../core/client/models/queries.models';
export { IMeatStock } from './interfaces/IMeatStock';
export interface IProductsPageExtension extends Components.IPageExtensions {
    white_boxes: {
        red_box: React.ComponentClass;
    };
}
export interface IProps extends Components.IPageProps<{}, IProductsPageExtension> {
}
export interface IState {
    products: MeatStockResponse | undefined;
    isLoading: boolean;
    showModal: boolean;
    totalUnist: number;
}
export declare class ProductsPage extends Components.Page<IProps, IState> {
    private massControlClient;
    static contextType: React.Context<MermaContextType>;
    private productAddedToStorage;
    private productRemovedToStorage;
    private setProductAddedToStorage;
    private setProductRemovedToStorage;
    state: IState;
    constructor(props: IProps);
    componentDidMount(): Promise<void>;
    render(): JSX.Element;
    gotToProductDetail(ean: string): void;
    showSnackbar(): void;
    redirectTo(goTo: string): void;
    actionOneFunction(): void;
    actionTwoFunction(): void;
    calculateTotalboxes(products: MeatStockResponse): number;
}
