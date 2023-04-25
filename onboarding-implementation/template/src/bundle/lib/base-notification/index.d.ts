/// <reference types="react" />
import { BasePage } from '../base-page';
export declare abstract class BaseNotification<IProps = {}, IState = {}> extends BasePage<IProps, IState> {
    onActivateNotificationClickHandler: () => void;
    render: () => JSX.Element;
}
