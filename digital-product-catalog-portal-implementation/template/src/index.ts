import Module, { IModuleProps, Footer, Header, CartContextProvider, GlobalContextProvider, ElevatorButton, DrawerCategories, LoaderScreen, ModalCart } from './bundle'
import './bundle/index.css'

export { Footer, Header, CartContextProvider, GlobalContextProvider, ElevatorButton, LoaderScreen, ModalCart, DrawerCategories }

export class {{#pascalCase data.name}}{{/pascalCase}}OverrideModule extends Module {
    constructor(props: IModuleProps) {
        super(props, {});
    }
}
