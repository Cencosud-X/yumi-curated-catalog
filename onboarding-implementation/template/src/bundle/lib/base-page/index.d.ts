import { Components } from '../../sdk';
export declare abstract class BasePage<IProps = {}, IState = {}> extends Components.Page<IProps, IState> {
    next: () => void;
}
