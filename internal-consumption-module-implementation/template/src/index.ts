import Module, { IModuleProps } from './bundle'
import './bundle/index.css'

export class InternalConsumptionOverrideModule extends Module {
    constructor(props: IModuleProps) {
        super(props, {});
    }
}
