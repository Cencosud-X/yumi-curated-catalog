import { Components } from './sdk';
import ApprovalCenterButton from './components/card-approval';
import ApprovalCardExemple from './components/card-test';
import { IApprovalModuleOverride } from './interfaces/IExtensions';
import ApprovalSettingsClient from './clients/localStorage/localStorage';
export { ApprovalCenterButton, ApprovalSettingsClient, ApprovalCardExemple };
export interface IModuleProps extends Components.IModuleProps {
}
export default abstract class ApprovalModule extends Components.Module<IApprovalModuleOverride> {
    static route: string;
    componentDidMount(): void;
    componentWillUnmount(): void;
    constructor(props: IModuleProps, override: IApprovalModuleOverride);
    render(): import("react/jsx-runtime").JSX.Element;
}
