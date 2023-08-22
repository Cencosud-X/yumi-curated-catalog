import Module, { Header, ModalCart, DrawerCategories, PortalLayout, IModuleProps } from './bundle'
import './bundle/index.css'

export { Header, ModalCart, DrawerCategories, PortalLayout }

export class {{#pascalCase data.name}}{{/pascalCase}}OverrideModule extends Module {
    constructor(props: IModuleProps) {
        super(props, {});
    }
}
