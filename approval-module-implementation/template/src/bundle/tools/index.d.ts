declare const loading: (isActive: boolean, text?: string) => void;
declare const snackbar: (type: 'info' | 'success' | 'warning' | 'error' | 'loading', text: string, placement?: 'top' | 'bottom', duration?: number) => void;
declare const currencyApproval: (value: number, monetaryCurrency: string, localeDate: string) => string;
declare const formatDate: (usDate: string | Date, localeDate: string) => string;
declare const getMime: (format: string) => "" | "application/pdf" | "image/jpeg" | "image/png" | "image/bmp" | "application/xml" | "application/vnd.ms-excel" | "application/msword" | "application/vnd.ms-powerpoint" | "application/zip";
export { currencyApproval, formatDate, getMime, loading, snackbar };
