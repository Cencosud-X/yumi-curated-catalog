import Module, { IModuleProps } from './bundle'
import './bundle/index.css'

export class {{#pascalCase data.name}}{{/pascalCase}}OverrideModule extends Module {
    constructor(props: IModuleProps) {
        super(props, {});
    }
}
