/// <reference types="react" />
interface IInventoryLoadModal {
    show: boolean;
    closeModal: () => void;
    loadInventory: () => void;
}
export declare const InventoryLoadModalComponent: ({ show, closeModal, loadInventory, }: IInventoryLoadModal) => JSX.Element;
export {};
