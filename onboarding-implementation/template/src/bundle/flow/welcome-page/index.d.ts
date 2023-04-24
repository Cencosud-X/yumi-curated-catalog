/// <reference types="react" />
import '@ionic/react/css/ionic-swiper.css';
import 'swiper/css';
import { Components } from '../../sdk';
import './index.css';
export interface IWelcomeExtension {
}
export interface IProps extends Components.IPageProps<{}, IWelcomeExtension> {
}
export interface IState {
}
export declare class WelcomePage extends Components.Page<IProps, IState> {
    state: IState;
    onNextButtonClickHandler: () => void;
    render: () => JSX.Element;
}
