import { Components } from '../../sdk';
import React from 'react';
export interface IHomePageExtension {
    white_boxes: {
        red_box: React.ComponentClass;
    };
}
export interface IProps extends Components.IPageProps<{}, IHomePageExtension> {
}
export interface IState {
}
export declare class HomePage extends Components.Page<IProps, IState> {
    state: IState;
    render(): JSX.Element;
}
