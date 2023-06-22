/// <reference types="react" />
import { Components } from '../../sdk';
import * as Contexts from '../../contexts';
export interface IProps extends Components.IPageProps<any> {
}
export interface IState {
    show_modal: boolean;
}
export declare class Filters extends Components.Page<IProps, IState> {
    static contextType: import("react").Context<Contexts.IModuleContext>;
    context: React.ContextType<typeof Contexts.Module>;
    state: IState;
    onGoBackHandler: () => void;
    onOpenModalHandler: () => void;
    onCloseModalHandler: () => void;
    render(): JSX.Element;
}
