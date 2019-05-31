using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RedirectionsAngular.Model
{

    //https://datatables.net/manual/server-side

    public class DataTablesParameters
    {
        public RedirectModel RedirectModel { get; set; }

        //public int Draw { get; set; }
        public int PageNo { get; set; }
        public int PageSize { get; set; }

        public string OrderByColumn { get; set; }

        public string AscOrDesc { get; set; }

        //public string SearchValue { get; set; }
        //public List<ColumnParameters> Columns { get; set; }
        //public List<OrderParameters> Order { get; set; }

        ///// <summary>
        ///// If true we add deleted elements.
        ///// </summary>
        //public bool IncludeDeletions { get; set; }
    }

    public class ColumnParameters
    {
        public string Data { get; set; }
        public string Name { get; set; }
        public bool Searchable { get; set; }
        public bool Orderable { get; set; }
        public string SearchValue { get; set; }
    }

    public class OrderParameters
    {
        public int Column { get; set; }
        public string Dir { get; set; }
    }

    public class SearchParameters
    {
        public string Value { get; set; }
    }

}
