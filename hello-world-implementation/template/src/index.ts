import Module, { IModuleProps } from './bundle'

/*
{{#json data}}{{/json}}
*/

export class {{data.name}}OverrideModule extends Module {
    constructor(props: IModuleProps) {
        super(props, {});
    }
}
