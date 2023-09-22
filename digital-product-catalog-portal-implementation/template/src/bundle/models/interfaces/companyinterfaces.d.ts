export interface IResponseSellers {
    sellers_by_office: SellersByOffice[];
    sellers: ISeller[];
}
export interface SellersByOffice {
    office: IOffice;
    sellers: ISeller[];
}
export interface IOffice {
    name: string;
    _id: string;
}
export interface ISeller {
    full_name: string;
    email: string;
    _id: string;
    office_id: string;
}
