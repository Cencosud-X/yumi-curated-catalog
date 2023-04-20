/// <reference types="react" />
import { Components } from '../../sdk';
export interface IProps extends Components.IPageProps {
}
export interface IState {
}
export declare class AboutPage extends Components.Page<IProps, IState> {
    state: IState;
    render(): JSX.Element;
}
