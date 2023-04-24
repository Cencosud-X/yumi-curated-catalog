import Module, { IModuleProps } from './bundle'

export class HelloWorldSourceOverrideModule extends Module {
    constructor(props: IModuleProps) {
        super(props, {});
    }
}
