export interface GetZonificationSavedRequest {
    store: string;
    zonifications: {
        zones: any[];
        furnitures: any[];
        users: any[];
    };
}
