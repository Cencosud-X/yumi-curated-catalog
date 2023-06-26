export declare const useScan: () => {
    initScan: () => Promise<void>;
    isScanPermissionGranted: boolean;
    stopScan: () => Promise<void>;
    startScan: (action: (response: string) => void) => Promise<void>;
};
