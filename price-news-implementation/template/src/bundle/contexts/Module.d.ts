import React from 'react';
import * as Models from '../models';
export interface IModuleContext {
    tasks: Models.ITask[];
    completeTask: (task: Models.ITask) => void;
    printers: Models.IPrinter[];
    selected_printer?: Models.IPrinter;
    setSelectedPrinter: (printer: Models.IPrinter) => void;
    loadData: () => void;
}
export declare const Module: React.Context<IModuleContext>;
