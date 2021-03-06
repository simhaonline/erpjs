import { BaseModel } from './base.model';
import { CurrencyModel } from './currency.model';

export interface CurrencyRateModel extends BaseModel {
  from: Promise<CurrencyModel>; // EUR
  to: Promise<CurrencyModel>; // CZK
  currencyMultiplyingRate: number; // 1 EUR = x CZK
  start: Date;
  end: Date;
}
