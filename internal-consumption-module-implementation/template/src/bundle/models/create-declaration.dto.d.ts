import { CostCenter } from './cost-center.dto';
export interface CreateDeclarationDTO {
    costCenter: CostCenter;
    data: {
        id: string;
        product: string;
        costCenter: CostCenter;
        count: number;
    }[];
}
