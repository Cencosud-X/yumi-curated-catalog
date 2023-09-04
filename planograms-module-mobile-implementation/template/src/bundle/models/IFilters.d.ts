export default interface IFilters {
    stores: string[];
    sections: string[];
    categories: string[];
    states: {
        key: string;
        value: boolean;
    }[];
}
