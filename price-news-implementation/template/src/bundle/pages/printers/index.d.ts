/// <reference types="react" />
import * as Models from '../../models';
import { Components } from '../../sdk';
import * as Contexts from '../../contexts';
export interface IProps extends Components.IPageProps {
}
export interface IState {
}
export declare class Printers extends Components.Page<IProps, IState> {
    static contextType: import("react").Context<Contexts.IModuleContext>;
    context: React.ContextType<typeof Contexts.Module>;
    componentDidMount(): void;
    state: IState;
    onGoBackHandler: () => void;
    onOpenPrinterHandler: (printer: Models.IPrinter) => void;
    retryLoadData: () => void;
    render(): JSX.Element;
}
