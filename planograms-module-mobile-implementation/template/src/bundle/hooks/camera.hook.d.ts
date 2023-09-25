export declare const useCamera: () => {
    initCamera: () => Promise<void>;
    stopCamera: () => Promise<void>;
    captureImage: () => Promise<string>;
    searchAndGetFile: (callback: (image: string) => void) => Promise<void>;
    isOpen: boolean | undefined;
};
