import { Enum } from './Enum';


export enum enumSourceTypeTargetType {
    Url = 0,
    Path = 1,
    Node = 2,
    CommunityPost = 3,
    CommunityTag = 4,
    Product = 5,
    ProductPureMarketPlace = 6,
    Brand = 7,
    Format = 8,
    Work = 9,
    Artist = 10,
    Series = 11,
    CommunityContributor = 12,
    Store = 13,
    CommunitySecondaryHome = 14
}

export class EnumSourceType extends Enum {
    GetArray(): { id: number; name: string }[] {
        return super.SortByNameAndConvertToArray(enumSourceTypeTargetType, true,[10]);
    }
}


export class EnumTargetType extends Enum {
    GetArray(): { id: number; name: string }[] {
    
        return super.SortByNameAndConvertToArray(enumSourceTypeTargetType, true,[10]);
    }
}

// export function SourceTypes() {
//     let map: { id: string; name: string }[] = [];
//     for (var n in EnumSourceTypeTargetType) {
//         if (typeof EnumSourceTypeTargetType[n] === 'number') {
//             map.push({ id: <any>EnumSourceTypeTargetType[n], name: n });
//         }
//     }

//     const sorted = map.sort((t1, t2) => {      
//         if (t1.name > t2.name) { return 1; }
//         if (t1.name < t2.name) { return -1; }
//         return 0;
//       });

//     console.log("map map ", sorted);
//     return sorted;
// }


// export const SourceTypes2 = () => {

//     var obj: { [key: number]: any, [value: string]: any } = {};

//     let map: any;

//     for (var n in EnumSourceTypeTargetType) {
//         if (typeof EnumSourceTypeTargetType[n] === 'number') {
//             console.log("***", n);
//             console.log("**EnumSourceTypeTargetType *", EnumSourceTypeTargetType[n]);
//             obj[n] = EnumSourceTypeTargetType[n];

//         }
//     }
//     console.log("obj obj ", obj)
//     return obj;
// }