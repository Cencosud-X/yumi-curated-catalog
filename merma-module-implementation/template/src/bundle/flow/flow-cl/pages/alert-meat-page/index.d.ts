import { Components } from '../../../../sdk';
import React from 'react';
export interface IMeatAlerExtension extends Components.IPageExtensions {
    white_boxes: {
        red_box: React.ComponentClass;
    };
    triggers: {
        get_user_token: () => Promise<string>;
        url_env: () => Promise<string>;
    };
}
export interface IProps extends Components.IPageProps<{}, IMeatAlerExtension> {
}
export interface IState {
}
export declare class MeatAlertPage extends Components.Page<IProps, IState> {
    constructor(props: IProps);
    componentDidMount(): Promise<void>;
    render(): JSX.Element;
}
