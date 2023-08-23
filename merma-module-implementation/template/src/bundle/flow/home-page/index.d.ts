import { MermaContextType } from '../../core/context/merma-context/MermaContext';
import { IHomePageExtension } from '../../core/interfaces';
import { Components } from '../../sdk';
import React from 'react';
export interface IProps extends Components.IPageProps<{}, IHomePageExtension> {
}
export interface IState {
}
export declare class HomePage extends Components.Page<IProps, IState> {
    static contextType: React.Context<MermaContextType>;
    private userToken;
    constructor(props: IProps);
    componentDidMount(): void;
    render(): JSX.Element;
    handleClick(goTo: string): void;
}
