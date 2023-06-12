/// <reference types="react" />
import { Components } from '../../sdk';
import { MassControlClient } from '../../core/client/models/MassControlClient';
import { ProductStockResponse } from '../../core/client/models/queries.models';
export interface IProductDetailPageExtension extends Components.IPageExtensions {
}
export interface IProps extends Components.IPageProps<{}, IProductDetailPageExtension> {
}
export interface IState {
    isLoading: boolean;
    showModal: boolean;
    productStock: ProductStockResponse | undefined;
}
export declare class ProductDetailPage extends Components.Page<IProps, IState> {
    massControlClient: MassControlClient;
    state: IState;
    componentDidMount(): Promise<void>;
    render(): JSX.Element;
    actionOneFunction(): void;
    actionTwoFunction(): void;
    calculateDaysToExpirate(days: number): any;
    calculateTotalWeight(productStock: ProductStockResponse): {
        totalWeight: number;
        boxes: number;
    };
}
