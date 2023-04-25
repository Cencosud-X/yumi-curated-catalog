/// <reference types="react" />
import { BasePage } from '../base-page';
export declare abstract class BaseGPS<IProps = {}, IState = {}> extends BasePage<IProps, IState> {
    onActivateLocalizationClickHandler: () => void;
    render: () => JSX.Element;
}
