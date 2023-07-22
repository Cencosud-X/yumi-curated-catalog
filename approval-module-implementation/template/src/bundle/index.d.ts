import { Components } from './sdk';
import CardApprovalCenter from './components/card-approval';
import CardChildrenExemple from './components/card-test';
import { IApprovalModuleOverride } from './interfaces/IExtensions';
export { CardApprovalCenter, CardChildrenExemple };
export interface IModuleProps extends Components.IModuleProps {
}
export default abstract class ApprovalModule extends Components.Module<IApprovalModuleOverride> {
    static route: string;
    componentDidMount(): void;
    componentWillUnmount(): void;
    constructor(props: IModuleProps, override: IApprovalModuleOverride);
}
