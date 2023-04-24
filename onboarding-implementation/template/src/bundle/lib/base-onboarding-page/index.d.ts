/// <reference types="react" />
import '@ionic/react/css/ionic-swiper.css';
import 'swiper/css';
import { Components } from '../../sdk';
import './index.css';
export interface IOnboardingExtension {
}
export interface IProps extends Components.IPageProps<{}, IOnboardingExtension> {
}
export interface IState {
}
export interface IOnboardingParams {
    image: string;
    title: string;
    subtitle: string;
    actionText: string;
    onActionClickHandler: () => void;
}
export declare abstract class BaseOnboardingPage extends Components.Page<IProps, IState> {
    state: IState;
    protected params: IOnboardingParams;
    constructor(props: IProps, params: IOnboardingParams);
    onNextButtonClickHandler: () => void;
    render: () => JSX.Element;
}
