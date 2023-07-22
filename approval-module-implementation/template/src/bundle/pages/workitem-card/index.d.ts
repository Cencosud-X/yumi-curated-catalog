/// <reference types="react" />
import { Components } from '../../sdk';
import { IFioriExtension } from '../../interfaces/IExtensions';
export interface IProps extends Components.IPageProps<{}, IFioriExtension> {
}
export declare function WorkItemCard(props: IProps): JSX.Element;