export enum EnumSourceTypeTargetType {
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


export function SourceTypes() {

    let map: { id: number; name: string }[] = [];

    for (var n in EnumSourceTypeTargetType) {
        if (typeof EnumSourceTypeTargetType[n] === 'number') {
            map.push({ id: <any>EnumSourceTypeTargetType[n], name: n });
        }
    }

    return map;
}


 