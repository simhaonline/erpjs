import { BaseModel } from './base.model';
import { HasProductsQuantities } from '../helpers/has.products.quantities';
import { HasSalesStage } from '../helpers/has.sales.stage';
import { HasCustomer } from '../helpers/has.customer';
import { HasCurrency } from '../helpers/has.currency';
import { HasTotalLines } from '../helpers/has.total.lines';
import { HasGrandTotal } from '../helpers/has.grand.total';

export interface OrderModel extends HasProductsQuantities, BaseModel,
  HasSalesStage, HasCustomer, HasCurrency, HasTotalLines, HasGrandTotal {
  totalLines: number;
}
