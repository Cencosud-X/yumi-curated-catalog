import * as React from 'react';
import { ChecklistFlowPagesEnum, IChecklistTaskExtended, ItemFeedback, IChecklistTaskItem } from '../dtos';
import { ERROR_TYPES } from '../dtos/error-types.enum';
import { IChecklistTask, IChecklistItem } from '../dtos';
export interface IModuleContext {
    country: string;
    page: ChecklistFlowPagesEnum;
    checklist: IChecklistTask[];
    loading: boolean;
    error?: ERROR_TYPES;
    selectedCheck?: IChecklistTaskExtended;
    selectedClItem?: IChecklistItem;
    feedback?: ItemFeedback;
    showSuccessSnackBar: (msg: string, type?: 'success' | 'error') => void;
    setPage: (value: ChecklistFlowPagesEnum) => void;
    setLoading: (value: boolean) => void;
    setFeedback: (feedback: ItemFeedback | undefined) => void;
    setSelectedClItem: (data: IChecklistItem | undefined) => void;
    setSelectedCheck: (selectedCheck: IChecklistTaskExtended | undefined) => void;
    getChecklistData: (id: string) => Promise<IChecklistTaskExtended>;
    getChecklistItemData: (id: string) => Promise<void>;
    getChecklists: () => Promise<void>;
    saveFeedback: (feedback: ItemFeedback, taskId: string, itemId: string) => Promise<void>;
    completeChecklistTask: (feedback: ItemFeedback, taskId: string, itemId: string) => Promise<void>;
    sendChecklist: (taskId: string) => void;
    selectedChecklistTask?: IChecklistTaskItem[];
    setSelectedChecklistTask: (data: IChecklistTaskItem[]) => void;
    setChecklistTaskId: (id: string | undefined) => void;
    checklistTaskId: string | undefined;
}
export declare const ChecklistContext: React.Context<IModuleContext>;
export declare const ChecklistProvider: React.FC;