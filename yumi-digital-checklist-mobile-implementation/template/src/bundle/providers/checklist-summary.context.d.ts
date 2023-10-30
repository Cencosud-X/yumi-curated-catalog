import React from 'react';
import { IChecklistTask, IChecklistTaskItem } from '../dtos';
export interface CheckListSummaryContextData {
    checklists: IChecklistTask[];
    selectedChecklist: IChecklistTaskItem | undefined;
    loading: boolean;
    fetchChecklistItem: (id: string) => Promise<void>;
    fetchPending: (checklistId: string) => Promise<void>;
    fetchCompleted: (checklistId: string) => Promise<void>;
    fetchExpired: (checklistId: string) => Promise<void>;
}
export declare const useChecklistSummaryContext: () => CheckListSummaryContextData;
export declare const ChecklistSummaryContextProvider: React.FC;
