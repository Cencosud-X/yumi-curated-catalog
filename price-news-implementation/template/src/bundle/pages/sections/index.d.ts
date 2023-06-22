/// <reference types="react" />
import { Components } from '../../sdk';
import * as Models from '../../models';
import * as Contexts from '../../contexts';
export interface IProps extends Components.IPageProps<{
    printerId: string;
}> {
}
export interface IState {
    show_printers_modal: boolean;
    sections: Models.ISection[];
}
export declare class Sections extends Components.Page<IProps, IState> {
    static contextType: import("react").Context<Contexts.IModuleContext>;
    context: React.ContextType<typeof Contexts.Module>;
    state: IState;
    onGoBackHandler: () => void;
    onOpenPrintersModalHandler: () => void;
    onClosePrintersModalHandler: () => void;
    onSelectPrinterHandler: (printer: Models.IPrinter) => void;
    onOpenSectionHandler: (section: Models.ISection) => void;
    componentDidMount(): void;
    render: () => JSX.Element;
}
