import { Enum } from './Enum';

export enum enumRedirectionType {
    MovedPermanently = 301,
    Found = 302
}
export class EnumRedirectionType extends Enum {
    GetArray(): { id: number; name: string }[] {
        return (super.SortByNameAndConvertToArray(enumRedirectionType, false));
    }
}