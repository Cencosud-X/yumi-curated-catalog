/// <reference types="react" />
import { BasePage } from '../base-page';
export declare abstract class BaseWelcome<IProps = {}, IState = {}> extends BasePage<IProps, IState> {
    onStartClickHandler: () => void;
    render: () => JSX.Element;
}
