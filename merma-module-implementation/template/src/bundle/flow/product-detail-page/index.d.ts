/// <reference types="react" />
import { MassControlClient } from '../../core/client/MassControlClient';
import { ProductStockResponse } from '../../core/client/mass-control-bff-models';
import { Components } from '../../sdk';
export interface IProductDetailPageExtension extends Components.IPageExtensions {
}
export interface IProps extends Components.IPageProps<{}, IProductDetailPageExtension> {
}
export interface IState {
    isLoading: boolean;
    showModal: boolean;
    productStock: ProductStockResponse | undefined;
    showModalError: boolean;
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
    handleModalErrorClose(): void;
    handleModalErrorRetry(): void;
    loadProducStock(): Promise<void>;
}
