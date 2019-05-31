using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;


// dsfdsqfqdsfdsfqds

//   [ValidSourceAndTarget]
public class RedirectModel
{

      [JsonProperty(PropertyName = "redirectId")]
    public int? RedirectId { get; set; }

    public EnumDomain? DomainId { get; set; }

    //[JsonProperty(PropertyName = "domainId")]
    //public int DomainId { get; set; }


    //[ValidSource]

    //[Required]
    public EnumSourceTypeTargetType? SourceType { get; set; }

    ///// <summary>
     // Uniquement utilisé pour l'affichage  
    ///// </summary>
     public string SourceTypeString => SourceType?.ToString();


    //[Required]
    //[StringLength(500)]
    public string Source { get; set; }



    //[Required]
    public EnumSourceTypeTargetType? TargetType { get; set; }

    ///// <summary>
    // Utilisé pour l'affichage  
    ///// </summary>
    public string TargetTypeString => TargetType?.ToString();


    //[Required]
    [StringLength(500)]
    public string Target { get; set; }


    //[ValidEnum]

    //[Required]
    [JsonProperty(PropertyName = "redirectionType")]
    public EnumRedirectType? RedirectType { get; set; }

   
    ///// Uniquement utilisé pour l'affichage 
    public string RedirectTypeString => RedirectType?.ToString();

    //public DateTime CreationDate { get; set; }

    //public string CreationUser { get; set; }

    //public DateTime? ModificationDate { get; set; }

    //public string ModificationUser { get; set; }

     public DateTime? DeletionDate { get; set; }
    //public string DeletionUser { get; set; }

    ///// <summary>
    ///// True if GetAuthorizedReadWriteDomain("REDIRECT") doesnt DomainId.Value 
    ///// </summary>
    //public bool ReadOnly { get; set; }

    //public bool IsDeleted { get; set; }

    //// public IEnumerable<RedirectHistoryViewModel> History { get; set; }

    //public object Clone()
    //{
    //    return this.MemberwiseClone();
    //}
}

public class RedirectModelList
{
    public static List<RedirectModel> RedirectList
    {
        get; set;
    }

    public static void UpdateRedirectList(RedirectModel redirect)
    {
        RedirectModel rm = RedirectList.Single(x => x.RedirectId == redirect.RedirectId);

        //rm.SourceType = redirect.SourceType;
        //rm.Source = redirect.Source;
        //rm.TargetType = redirect.TargetType;
        //rm.Target = redirect.Target;
        //rm.RedirectType = redirect.RedirectType;
    }

}


public class ResultModel
{
    public bool Success { get; set; }

    public string Message { get; set; }

    public dynamic Data { get; set; }
}


public class RedirectPaging : RedirectModel
{
    /// <summary>
    /// Number of redirects to display when paging
    /// </summary>
    public int PageSize { get; set; }
    public int PageNo { get; set; }

    public string OrderByColumn { get; set; }
    public string AscOrDesc { get; set; }

    public bool IncludeDeletions { get; set; }
}

public class DataTablesReturnData<T>
{
    [JsonProperty(PropertyName = "draw")]
    public int Draw { get; set; }
    [JsonProperty(PropertyName = "recordsTotal")]
    public int RecordsTotal { get; set; }
    [JsonProperty(PropertyName = "recordsFiltered")]
    public int RecordsFiltered { get; set; }
    [JsonProperty(PropertyName = "data")]
    public IEnumerable<T> Data { get; set; }
    [JsonProperty(PropertyName = "error")]
    public string Error { get; set; }
}