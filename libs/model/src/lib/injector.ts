import { BankService } from './services/bank.service';
import { CountryService } from './services/country.service';
import { AddressService } from './services/address.service';
import { BankAccountService } from './services/bank.account.service';
import { OrganizationService } from './services/organization.service';
import { CustomerService } from './services/customer.service';
import { AccountingSchemeService } from './services/accounting.scheme.service';
import { CurrencyService } from './services/currency.service';
import { SalesInvoiceService } from './services/sales.invoice.service';
import { SalesInvoiceLineService } from './services/sales.invoice.line.service';
import { TaxService } from './services/tax.service';
import { SalesInvoiceVatService } from './services/sales.invoice.vat.service';
import { UserService } from './services/user.service';
import { UserToOrganizationService } from './services/user.to.organization.service';
import { TaskService } from './services/task.service';
import { CalendarActivityService } from './services/calendar.activity.service';

export interface Injector {
  bankService: BankService;
  countryService: CountryService;
  currencyService: CurrencyService;
  addressService: AddressService;
  bankAccountService: BankAccountService;
  organizationService: OrganizationService;
  customerService: CustomerService;
  accountingSchemeService: AccountingSchemeService;
  salesInvoiceService: SalesInvoiceService;
  salesInvoiceLineService: SalesInvoiceLineService;
  taxService: TaxService;
  salesInvoiceVatService: SalesInvoiceVatService;
  userService: UserService;
  userToOrganizationService: UserToOrganizationService;
  taskService: TaskService;
  calendarActivityService: CalendarActivityService;
}
