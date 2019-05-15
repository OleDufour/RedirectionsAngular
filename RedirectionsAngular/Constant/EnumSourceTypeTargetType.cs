using System;
using System.Linq;


/// <summary>
/// Attention, si on modifie cette enum il faut également répertorier dans :
/// \TFS\10-Front\services\front\Dev\Dev-Front\src\Redirection\RedirectionContracts\Common\RedirectTypeEnum.cs
/// </summary>
public enum EnumSourceTypeTargetType
{
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
public class SourceTypeTargetType
{
    public static IOrderedEnumerable<EnumSourceTypeTargetType> SourceTypes
    {
        get
        {
            var sourceTypes = Enum.GetValues(typeof(EnumSourceTypeTargetType))
                        .Cast<EnumSourceTypeTargetType>()
                        .Where(x => x != EnumSourceTypeTargetType.Url && x != EnumSourceTypeTargetType.Store)
                        .OrderBy(x => x.ToString());
            return sourceTypes;
        }
    }

    public static IOrderedEnumerable<EnumSourceTypeTargetType> TargetTypes
    {
        get
        {
            var targetTypes = Enum.GetValues(typeof(EnumSourceTypeTargetType))
                        .Cast<EnumSourceTypeTargetType>()
                        .Where(x => x != EnumSourceTypeTargetType.Path && x != EnumSourceTypeTargetType.CommunitySecondaryHome && x != EnumSourceTypeTargetType.Format && x != EnumSourceTypeTargetType.Work)
                        .OrderBy(x => x.ToString());
            return targetTypes;
        }
    }

}

