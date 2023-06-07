/// <reference types="react" />
import * as Models from '../../models';
import { Components } from '../../sdk';
export declare type IPrintsPageExtension = Components.IPageExtensions;
export interface IProps extends Components.IPageProps<object, IPrintsPageExtension> {
}
export interface IState {
    prints: Models.IPrint[];
}
export declare class PrintsPage extends Components.Page<IProps, IState> {
    state: IState;
    onGoBackHandler: () => void;
    onClickPrintHandler: (print: Models.IPrint) => void;
    render(): JSX.Element;
}
