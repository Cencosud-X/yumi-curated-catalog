/// <reference types="react" />
import { Components } from '../../sdk';
import * as Contexts from '../../contexts';
import * as Models from '../../models';
export interface IProps extends Components.IPageProps<{
    sectionId: string;
}> {
}
export interface IState {
    section?: Models.ISection;
    selection_type: 'SINGLE' | 'MULTIPLE';
    selections: Record<string, boolean>;
}
export declare class Categories extends Components.Page<IProps, IState> {
    static contextType: import("react").Context<Contexts.IModuleContext>;
    context: React.ContextType<typeof Contexts.Module>;
    state: IState;
    onGoBackHandler: () => void;
    onTurnOnSelectMultipleHandler: () => void;
    onTurnOfSelectMultipleHandler: () => void;
    onToogleSelectCategoryHandler: (category: Models.ICategory, selected: boolean) => void;
    onSelectProductCardHandler: (category: Models.ICategory, product: Models.IProduct) => void;
    onSelectAllHandler: () => void;
    onPrintSelectionHandler: () => void;
    componentDidMount(): void;
    render(): JSX.Element;
}
