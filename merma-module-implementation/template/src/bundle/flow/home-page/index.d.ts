import { MermaContextType } from '../../core/context/MermaContext';
import { Components } from '../../sdk';
import React from 'react';
export interface IHomePageExtension extends Components.IPageExtensions {
    white_boxes: {
        red_box: React.ComponentClass;
    };
    triggers: {
        get_user_token: () => Promise<string>;
    };
}
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
