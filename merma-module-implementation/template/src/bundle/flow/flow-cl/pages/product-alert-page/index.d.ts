import { MermaContextType } from '../../../../core/context/merma-context/MermaContext';
import { Components } from '../../../../sdk';
import React from 'react';
import { IAlertPageExtension } from '../../../../core/interfaces';
export interface IProps extends Components.IPageProps<{}, IAlertPageExtension> {
}
export interface IState {
}
export declare class AlertPage extends Components.Page<IProps, IState> {
    static contextType: React.Context<MermaContextType>;
    private userToken;
    private setUserToken;
    constructor(props: IProps);
    componentDidMount(): Promise<void>;
    render(): JSX.Element;
}
