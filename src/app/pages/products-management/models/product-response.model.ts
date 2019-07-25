import { Paging } from '@models-nubimetrics/paging.model';
import { Product } from './product.model';

export interface ProductResponse {
    site_id: string;
    query: string;
    paging: Paging;
    results: Product[];
}