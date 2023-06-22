import { Component } from 'react';
import * as Models from '../../models';
interface IProps {
}
interface IState {
    view_mode: 'PENDING' | 'READY';
    tasks: Models.ITask[];
    printers: Models.IPrinter[];
    selected_printer?: Models.IPrinter;
}
export declare class Boot extends Component<IProps, IState> {
    state: IState;
    completeTask: (task: Models.ITask) => void;
    setSelectedPrinter: (printer: Models.IPrinter) => void;
    loadData: () => void;
    componentDidMount: () => Promise<void>;
    render_PENDING: () => JSX.Element;
    render_READY: () => JSX.Element;
    render(): JSX.Element;
}
export {};
