/// <reference types="react" />
declare const useInView: (callback: () => void) => {
    isInView: boolean;
    elementRef: import("react").MutableRefObject<any>;
};
export default useInView;
