/// <reference types="react" />
import { MassFlowResponse } from '../../core/client/mass-control-bff-models';
import { Components } from '../../sdk';
export interface IProps extends Components.IPageProps {
}
export interface IState {
    isLoading: boolean;
    showModal: boolean;
    products: MassFlowResponse | undefined;
}
export declare class MassControlPage extends Components.Page<IProps, IState> {
    private massControlClient;
    state: IState;
    componentDidMount(): Promise<void>;
    render(): JSX.Element;
    actionOneFunction(): void;
    actionTwoFunction(): void;
}
