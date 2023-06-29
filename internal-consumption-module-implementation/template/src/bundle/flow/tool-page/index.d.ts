import { Components } from '../../sdk';
import React from 'react';
export interface IToolPageExtension extends Components.IPageExtensions {
    white_boxes: {
        red_box: React.ComponentClass;
    };
}
export interface IProps extends Components.IPageProps<{}, IToolPageExtension> {
}
export interface IState {
}
export declare class ToolPage extends Components.Page<IProps, IState> {
    state: IState;
    render(): JSX.Element;
}
