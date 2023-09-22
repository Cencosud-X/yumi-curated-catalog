export declare class StringFormatter {
    /**
     * Sanitize a string to be used as a name
     * @param name
     * @returns {string}
     */
    sanitize(name: string): string;
    /**
     * Convert string to snake case
     * @param text
     * @returns {string}
     */
    toSnakeCase(text: string): string;
    removeInitialZero: (value: string) => string;
    capitalizeLetter: ([first, ...rest]: any, lowerRest?: boolean) => string;
}
declare const _default: StringFormatter;
export default _default;
