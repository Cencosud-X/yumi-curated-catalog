import { CostCenter } from "./cost-center.dto";
import { Product } from "./product.dto";
export interface Declaration {
    id: string;
    product: Product;
    costCenter: CostCenter;
    count: number;
}
