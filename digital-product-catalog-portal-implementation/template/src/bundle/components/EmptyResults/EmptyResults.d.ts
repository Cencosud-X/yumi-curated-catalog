/// <reference types="react" />
export interface IPropsEmptyResults {
    emptyMessage?: string;
    descriptionMessage?: string;
    emptyImage?: any;
}
declare const EmptyResultsComponent: React.FC<IPropsEmptyResults>;
export default EmptyResultsComponent;
