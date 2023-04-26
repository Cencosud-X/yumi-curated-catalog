import Module, { IModuleProps } from './bundle'

export class HelloWorldOverrideModule extends Module {
    constructor(props: IModuleProps) {
        super(props, {});
    }
}
