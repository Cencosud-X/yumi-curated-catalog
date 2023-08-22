/// <reference types="react" />
export declare function useExpirationCalendar(): {
    expirationDate: string;
    calendarRef: import("react").RefObject<HTMLDivElement>;
    onChangeCalendar: (date: Date) => void;
    enableCalendar: () => void;
    cleanExpirationDate: () => void;
};
