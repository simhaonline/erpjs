import { LanguageModel } from '@erpjs/model';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class Language implements LanguageModel {
  @Field()
  displayName: string;
  @Field()
  id: number;
  @Field()
  isoCode: string;
}

export const CZ_ISO_CODE = 'cz';
export const EN_ISO_CODE = 'en';
export const CZ_DE_ISO_CODE = 'cz-de';

export const languages = [
  { displayName: 'Czech', id: 1, isoCode: CZ_ISO_CODE },
  { displayName: 'English', id: 2, isoCode: EN_ISO_CODE },
  { displayName: 'Czech-German', id: 3, isoCode: CZ_DE_ISO_CODE },
];
