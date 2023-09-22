declare class DateFormatter {
    toDateString(date?: Date, locale?: string): string;
    toCustomString(momentFormat: string, date?: Date, locale?: string): string;
    formatDate(stringDate: string, format: string, locale?: string): string;
}
declare const _default: DateFormatter;
export default _default;
