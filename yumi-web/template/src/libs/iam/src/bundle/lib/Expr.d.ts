/**
 * Expression Class (Guard Pattern)
 */
declare class Expressions {
    /**
     * Execute a callback when we are in Native Phone (Capacitor)
     * @param {()=>void} callback Function to execute if we are in a native phone
     */
    whenInNativePhone(callback: () => void): void;
    /**
     * Execute a callback when we are not in Native Phone (Capacitor)
     * @param {()=>void} inCallback Function to execute if we are in a native phone
     */
    whenNotInNativePhone(callback: () => void): void;
    /**
     * Execute a callback when we are not in Native Phone (Capacitor)
     * @param {()=>void} inCallback Function to execute if we are in a native phone
     */
    whenAndroid(callback: () => void, notCallback?: () => void): void;
    /**
     * Execute a callback when we are in IOS Platform
     * @param {()=>void} inCallback Function to execute if we are in a native phone
     */
    whenIos(callback: () => void, notCallback?: () => void): void;
}
declare const _default: Expressions;
export default _default;
