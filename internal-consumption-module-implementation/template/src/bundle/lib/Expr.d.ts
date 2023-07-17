/**
 * Expression Class (Guard Pattern)
 */
declare class Expressions {
    /**
     * Execute a callback when the condition is True
     * @param {boolean} condition Expression to Check
     * @param {()=>void} callback Function to execute if the condition is True
     * @param {() => void} [falseCallback] Function to execute if the condition is False
     */
    whenTrue(condition: boolean, callback: () => void, falseCallback?: () => void): void;
    /**
     ** Execute a callback when the condition is False
     * @param {boolean} condition Expression to Check
     * @param {()=>void} callback Function to execute if the condition is False
     * @param {() => void} [trueCallback] Function to execute if the condition is True
     * @memberof Expressions
     */
    whenFalse(condition: boolean, callback: () => void, trueCallback?: () => void): void;
    /**
     * Function to execute if the system are in TEST_MODE ENV = true
     * @param {() => void} callback Function to execute if the condition is True
     * @memberof Expressions
     */
    /**
     * Function to execute if the user has the admin or developer role
     * @param {() => void} callback Function to execute if the condition is True
     * @returns {*}
     * @memberof Expressions
     */
    /**
     * Function to execute if the user has the admin or developer role
     * @param {() => void} callback Function to execute if the condition is True
     * @returns {*}
     * @memberof Expressions
     */
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
    /**
     * Return a boolean when we are in PDA Platform
     * @param {() => boolean}
     */
    whenPda(): Promise<boolean>;
    /**
     * Return a boolean when my device is offline
     * @param {() => boolean}
     */
    whenIsOfflineMyDevice(): boolean;
}
declare const _default: Expressions;
export default _default;
