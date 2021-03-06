import {
  AccountingSchemeServiceKey,
  AccountServiceKey,
  AddressServiceKey,
  BankAccountServiceKey,
  BankServiceKey,
  BaseEntityService,
  BaseModel,
  CalendarActivityServiceKey,
  Constructor,
  CountryServiceKey,
  CurrencyRateServiceKey,
  CurrencyServiceKey,
  CustomerGroupServiceKey,
  CustomerOrderServiceKey,
  CustomerPriceListServiceKey,
  CustomerProductPriceServiceKey,
  CustomerServiceKey,
  Injector,
  LeadServiceKey,
  OrganizationServiceKey, ProductIssueLineServiceKey,
  ProductIssueServiceKey,
  ProductQuantityOnHandServiceKey,
  ProductReceiptLineServiceKey,
  ProductReceiptServiceKey,
  ProductServiceKey,
  ProspectServiceKey,
  RecurringSalesInvoiceLineServiceKey,
  RecurringSalesInvoiceServiceKey,
  SalesInvoiceLineServiceKey,
  SalesInvoiceServiceKey,
  SalesInvoiceVatServiceKey,
  SuspectServiceKey,
  TaskServiceKey,
  TaxServiceKey,
  UserServiceKey,
  UserToOrganizationServiceKey,
  WarehouseServiceKey
} from '@erpjs/model';
import { AppUser, CalendarActivity, Customer, ModelModule, Prospect, SalesInvoice, Suspect, Task } from '@erpjs/data';
import { EntityManager, Repository } from 'typeorm';
import { Address } from '../entities/address';
import { BankAccount } from '../entities/bank.account';
import { Bank } from '../entities/bank';
import { Country } from '../entities/country';
import { Currency } from '../entities/currency';
import { Tax } from '../entities/tax';
import { SalesInvoiceLine } from '../entities/sales.invoice.line';
import { AccountingScheme } from '../entities/accounting.scheme';
import { Organization } from '../entities/organization';
import { SalesInvoiceVat } from '../entities/sales.invoice.vat';
import { UserToOrganization } from '../entities/user.to.organization';
import { Lead } from '../entities/lead';
import { Product } from '../entities/product';
import { CurrencyRate } from '../entities/currency.rate';
import { RecurringSalesInvoice } from '../entities/recurring.sales.invoice';
import { RecurringSalesInvoiceLine } from '../entities/recurring.sales.invoice.line';
import { Account } from '../entities/account';
import { CustomerGroup } from '../entities/customer.group';
import { CustomerPriceList } from '../entities/customer.price.list';
import { CustomerProductPrice } from '../entities/customer.product.price';
import { ProductQuantityOnHandServiceImplementation } from '@erp/data/src/lib/model/product.quantity.on-hand.service.implementation';
import { ProductQuantityOnHand } from '@erp/data/src/lib/entities/product.quantity.on-hand';
import { Warehouse } from '@erp/data/src/lib/entities/warehouse';
import { ProductReceipt } from '@erp/data/src/lib/entities/product.receipt';
import { ProductReceiptLine } from '@erp/data/src/lib/entities/product.receipt.line';
import { CustomerOrder } from '@erp/data/src/lib/entities/customer.order';
import { ProductIssue } from '@erp/data/src/lib/entities/product.issue';
import { ProductIssueLine } from '@erp/data/src/lib/entities/product.issue.line';

class ClassImplementation<E extends BaseModel, S> {
  createEntity: () => E;
  getRepository: (EntityManager) =>  Repository<E>;
}

const implementations = new Map<string, ClassImplementation<any, any>>([
  [CalendarActivityServiceKey, {
    createEntity: ()=> new CalendarActivity(),
    getRepository: (manager: EntityManager) => manager.getRepository(CalendarActivity), }],
  [AddressServiceKey, {
    createEntity: ()=> new Address(),
    getRepository: (manager: EntityManager) => manager.getRepository(Address), }],
  [BankAccountServiceKey, {
    createEntity: ()=> new BankAccount(),
    getRepository: (manager: EntityManager) => manager.getRepository(BankAccount), }],
  [BankServiceKey, {
    createEntity: ()=> new Bank(),
    getRepository: (manager: EntityManager) => manager.getRepository(Bank), }],
  [CountryServiceKey, {
    createEntity: ()=> new Country(),
    getRepository: (manager: EntityManager) => manager.getRepository(Country), }],
  [CurrencyServiceKey, {
    createEntity: ()=> new Currency(),
    getRepository: (manager: EntityManager) => manager.getRepository(Currency), }],
  [CustomerServiceKey, {
    createEntity: ()=> new Customer(),
    getRepository: (manager: EntityManager) => manager.getRepository(Customer), }],
  [SalesInvoiceServiceKey, {
    createEntity: ()=> new SalesInvoice(),
    getRepository: (manager: EntityManager) => manager.getRepository(SalesInvoice), }],
  [TaxServiceKey, {
    createEntity: ()=> new Tax(),
    getRepository: (manager: EntityManager) => manager.getRepository(Tax), }],
  [SalesInvoiceLineServiceKey, {
    createEntity: ()=> new SalesInvoiceLine(),
    getRepository: (manager: EntityManager) => manager.getRepository(SalesInvoiceLine), }],
  [AccountingSchemeServiceKey, {
    createEntity: ()=> new AccountingScheme(),
    getRepository: (manager: EntityManager) => manager.getRepository(AccountingScheme), }],
  [OrganizationServiceKey, {
    createEntity: ()=> new Organization(),
    getRepository: (manager: EntityManager) => manager.getRepository(Organization), }],
  [SalesInvoiceVatServiceKey, {
    createEntity: ()=> new SalesInvoiceVat(),
    getRepository: (manager: EntityManager) => manager.getRepository(SalesInvoiceVat), }],
  [UserServiceKey, {
    createEntity: ()=> new AppUser(),
    getRepository: (manager: EntityManager) => manager.getRepository(AppUser), }],
  [UserToOrganizationServiceKey, {
    createEntity: ()=> new UserToOrganization(),
    getRepository: (manager: EntityManager) => manager.getRepository(UserToOrganization), }],
  [TaskServiceKey, {
    createEntity: ()=> new Task(),
    getRepository: (manager: EntityManager) => manager.getRepository(Task), }],
  [LeadServiceKey, {
    createEntity: ()=> new Lead(),
    getRepository: (manager: EntityManager) => manager.getRepository(Lead), }],
  [SuspectServiceKey, {
    createEntity: ()=> new Suspect(),
    getRepository: (manager: EntityManager) => manager.getRepository(Suspect), }],
  [ProspectServiceKey, {
    createEntity: ()=> new Prospect(),
    getRepository: (manager: EntityManager) => manager.getRepository(Prospect), }],
  [ProductServiceKey, {
    createEntity: ()=> new Product(),
    getRepository: (manager: EntityManager) => manager.getRepository(Product), }],
  [CurrencyRateServiceKey, {
    createEntity: ()=> new CurrencyRate(),
    getRepository: (manager: EntityManager) => manager.getRepository(CurrencyRate), }],
  [RecurringSalesInvoiceServiceKey, {
    createEntity: ()=> new RecurringSalesInvoice(),
    getRepository: (manager: EntityManager) => manager.getRepository(RecurringSalesInvoice), }],
  [RecurringSalesInvoiceLineServiceKey, {
    createEntity: ()=> new RecurringSalesInvoiceLine(),
    getRepository: (manager: EntityManager) => manager.getRepository(RecurringSalesInvoiceLine), }],
  [AccountServiceKey, {
    createEntity: ()=> new Account(),
    getRepository: (manager: EntityManager) => manager.getRepository(Account), }],
  [CustomerGroupServiceKey, {
    createEntity: ()=> new CustomerGroup(),
    getRepository: (manager: EntityManager) => manager.getRepository(CustomerGroup), }],
  [CustomerPriceListServiceKey, {
    createEntity: ()=> new CustomerPriceList(),
    getRepository: (manager: EntityManager) => manager.getRepository(CustomerPriceList), }],
  [CustomerProductPriceServiceKey, {
    createEntity: ()=> new CustomerProductPrice(),
    getRepository: (manager: EntityManager) => manager.getRepository(CustomerProductPrice), }],
  [ProductQuantityOnHandServiceKey, {
    createEntity: ()=> new ProductQuantityOnHand(),
    getRepository: (manager: EntityManager) => manager.getRepository(ProductQuantityOnHand), }],
  [WarehouseServiceKey, {
    createEntity: ()=> new Warehouse(),
    getRepository: (manager: EntityManager) => manager.getRepository(Warehouse), }],
  [ProductReceiptServiceKey, {
    createEntity: ()=> new ProductReceipt(),
    getRepository: (manager: EntityManager) => manager.getRepository(ProductReceipt), }],
  [ProductReceiptLineServiceKey, {
    createEntity: ()=> new ProductReceiptLine(),
    getRepository: (manager: EntityManager) => manager.getRepository(ProductReceiptLine), }],
  [CustomerOrderServiceKey, {
    createEntity: ()=> new CustomerOrder(),
    getRepository: (manager: EntityManager) => manager.getRepository(CustomerOrder), }],
  [ProductIssueServiceKey, {
    createEntity: ()=> new ProductIssue(),
    getRepository: (manager: EntityManager) => manager.getRepository(ProductIssue), }],
  [ProductIssueLineServiceKey, {
    createEntity: ()=> new ProductIssueLine(),
    getRepository: (manager: EntityManager) => manager.getRepository(ProductIssueLine), }],


]);

// this is the derived class that will receive the constructor with super
export function Implement<T extends Constructor<BaseEntityService<E, S>>, E extends BaseModel, S>(constructor: T) {
  return class extends constructor implements BaseEntityService<E, S> {
    implementation = implementations.get(this.typeName());

    protected getRepository() {
      if (!this.implementation) { throw new Error(`No implementation for ${this.typeName()}`); }
      return this.implementation.getRepository(ModelModule.getEntityManager())
    }

    constructor(...args: any[]) {
      super(...args);
      this.loadEntities = async () => await this.getRepository().find();
      this.createEntity = () => this.implementation.createEntity();
      this.loadEntity = async (id) => await this.getRepository().findOne(id);
      this.persist = async(entity: E) => await this.getRepository().save(entity as any);
      this.delete  = async(entity: E) => await this.getRepository().remove(entity as any);
    }

    typeName(): string {
      // @ts-ignore
      return super.typeName();
    }
    getInjector(): Injector {
      return ModelModule.getInjector();
    }

    async save(args: S): Promise<E> {
      // @ts-ignore
      return await this.getRepository().save(await super.save(args));
    }
  };
}

export function Persistent<T extends Constructor<BaseEntityService<E, S>>, E extends BaseModel, S>(Base: T) {
  return class extends Base {
    implementation = implementations.get(this.typeName());

    protected getRepository() {
      if (!this.implementation) { throw new Error(`No implementation for ${this.typeName()}`); }
      return this.implementation.getRepository(ModelModule.getEntityManager())
    }

    constructor(...args: any[]) {
      super(...args);
      this.loadEntities = async () => await this.getRepository().find();
      this.createEntity = () => this.implementation.createEntity();
      this.loadEntity = async (id) => await this.getRepository().findOne(id);
    }

    typeName(): string {
      // @ts-ignore
      return super.typeName();
    }
    getInjector(): Injector {
      return ModelModule.getInjector();
    }

    async save(args: S): Promise<E> {
      // @ts-ignore
      return await this.getRepository().save(await super.save(args));
    }

    async persist(entity: E) {
      return await this.getRepository().save(entity as any);
    }  }
}
