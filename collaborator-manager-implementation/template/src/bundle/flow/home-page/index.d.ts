import { Components } from '../../sdk';
import React from 'react';
export interface ICollaboratorManagerPageExtension extends Components.IPageExtensions {
    white_boxes: {
        red_box: React.ComponentClass;
    };
}
export interface IProps extends Components.IPageProps<{}, ICollaboratorManagerPageExtension> {
}
export interface IState {
}
export declare class CollaboratorManagePage extends Components.Page<IProps, IState> {
    state: IState;
    render(): import("react/jsx-runtime").JSX.Element;
}
