import { CostCenter } from "./cost-center.dto";
export interface CreateDeclarationDTO {
    id: string;
    product: string;
    costCenter: CostCenter;
    count: number;
}
