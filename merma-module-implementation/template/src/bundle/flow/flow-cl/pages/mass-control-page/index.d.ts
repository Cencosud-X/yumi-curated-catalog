/// <reference types="react" />
import { Components } from '../../../../sdk';
export interface IProps extends Components.IPageProps {
}
export interface IState {
}
export declare class MassControlPage extends Components.Page<IProps, IState> {
    constructor(props: IProps);
    render(): JSX.Element;
}
