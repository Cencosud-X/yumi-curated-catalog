/// <reference types="react" />
import * as Contexts from '../../contexts';
import { Components } from '../../sdk';
export interface IProps extends Components.IPageProps {
}
export interface IState {
}
export declare class PrintList extends Components.Page<IProps, IState> {
    static contextType: import("react").Context<Contexts.IModuleContext>;
    context: React.ContextType<typeof Contexts.Module>;
    state: IState;
    onGoBackHandler: () => void;
    render(): JSX.Element;
}
