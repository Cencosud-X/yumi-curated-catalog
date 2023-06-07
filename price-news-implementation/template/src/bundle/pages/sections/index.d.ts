/// <reference types="react" />
import { Components } from '../../sdk';
import * as Models from '../../models';
export interface IProps extends Components.IPageProps {
}
export interface IState {
    sections: Models.ISection[];
}
export declare class SectionsPage extends Components.Page<IProps, IState> {
    state: IState;
    onGoBackHandler: () => void;
    render(): JSX.Element;
}
