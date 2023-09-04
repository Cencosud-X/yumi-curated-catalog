import Module, { IModuleProps,PortalLayout } from './bundle'
import './bundle/index.css'

export{PortalLayout}

export class {{#pascalCase data.name}}{{/pascalCase}}OverrideModule extends Module {
    constructor(props: IModuleProps) {
        super(props, {});
    }
}
