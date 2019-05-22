import { Enum } from './Enum';

export enum enumDomain {
    FR_FR = 1,
    FR_FR_PRO = 2,
    FR_BE = 3,
    NL_BE = 4,
    FR_CH = 5,
    PT_PT = 6,
    ES_ES = 7
}
export class EnumDomain extends Enum {
    GetArray(): { id: number; name: string }[] {
     
        var test = (super.SortByNameAndConvertToArray(enumDomain, false)) ;

       // test.unshift(empty);

        return test;
    }
}