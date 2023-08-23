/// <reference types="react" />
import { Components } from './sdk';
import { IMermaModuleOverride } from './core/interfaces';
export declare type IModuleProps = Components.IModuleProps;
export default abstract class MermaModule extends Components.Module<IMermaModuleOverride> {
    static route: string;
    constructor(props: IModuleProps, override: IMermaModuleOverride);
    render(): JSX.Element;
}
