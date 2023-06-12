/// <reference types="react" />
import { Components } from '../../sdk';
import { MassControlResponseSchema } from '../../core/client/models/queries.models';
export interface IProps extends Components.IPageProps {
}
export interface IState {
    isLoading: boolean;
    showModal: boolean;
    products: MassControlResponseSchema | undefined;
}
export declare class MassControlPage extends Components.Page<IProps, IState> {
    private massControlClient;
    state: IState;
    componentDidMount(): Promise<void>;
    render(): JSX.Element;
    actionOneFunction(): void;
    actionTwoFunction(): void;
}
