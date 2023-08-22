import Module, { Header, DrawerCategories, PortalLayout, IModuleProps } from './bundle'
import './bundle/index.css'

export { Header, DrawerCategories, PortalLayout }

export class {{#pascalCase data.name}}{{/pascalCase}}OverrideModule extends Module {
    constructor(props: IModuleProps) {
        super(props, {});
    }
}
