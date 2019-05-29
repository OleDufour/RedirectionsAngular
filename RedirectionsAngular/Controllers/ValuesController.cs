using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using RedirectionsAngular.Model;
using System.Data.SqlClient;
using System.Data;

namespace RedirectionsAngular.Controllers
{
    [EnableCors("AllowMyOrigin")]
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }



        [HttpPost]

        [Route("redirect/getdatatableredirects")]
        public DataTablesReturnData<RedirectModel> GetDataTableRedirects(DataTablesParameters parameters)
        {
            var r = new RedirectPaging();
            r.DomainId = (EnumDomain)parameters.DomainId;
            //r.OrderByColumn = RedirectBusinessModule.OrderByColumn(parameters);
            //r.AscOrDesc = RedirectBusinessModule.AscOrDesc(parameters);
            r.PageNo = parameters.Start / parameters.Length + 1;
            r.PageSize = parameters.Length;
            r.IncludeDeletions = parameters.IncludeDeletions;

            foreach (var p in parameters.Columns)
            {
                switch (p.Data)
                {
                    case nameof(r.SourceType): r.SourceType = (EnumSourceTypeTargetType)Convert.ToInt16(p.SearchValue); break;
                    case nameof(r.Source): r.Source = p.SearchValue; break;
                    case nameof(r.TargetType): r.TargetType = (EnumSourceTypeTargetType)Convert.ToInt16(p.SearchValue); break;
                    case nameof(r.Target): r.Target = p.SearchValue; break;
                    case nameof(r.RedirectType): r.RedirectType = (EnumRedirectType)Convert.ToInt16(p.SearchValue); break;
                }
            }
            var res = GetRedirectsForPaging(r, out var filteredCount, out var totalCount);
            //return new DataTablesReturnData<RedirectModel>
            //{
            //    Draw = parameters.Draw,
            //    RecordsFiltered = filteredCount,
            //    RecordsTotal = totalCount,
            //    Data = RedirectViewModelMapper.DtosToModels(res)
            //};
            return null;
        }

        public IEnumerable<RedirectModel> GetRedirectsForPaging(RedirectPaging r, out int filteredCount, out int totalCount)
        {
            using (var cnx = new SqlConnection(@"Data Source=SGEW0090\SQLEXPRESS;Initial Catalog=Front_Admin;Integrated Security=True"))
            {
                cnx.Open();
                SqlCommand cmd = new SqlCommand("sp_GetRedirectsForPaging", cnx);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                SqlDataReader rdr = cmd.ExecuteReader();
                CreateParameter(cmd, "DomainId", r.DomainId);
                CreateParameter(cmd, "SourceType", r.SourceType);
                CreateParameter(cmd, "Source", r.Source);
                CreateParameter(cmd, "TargetType", r.TargetType);
                CreateParameter(cmd, "Target", r.Target);
                CreateParameter(cmd, "RedirectType", r.RedirectType);
                CreateParameter(cmd, "PageSize", r.PageSize);
                CreateParameter(cmd, "PageNo", r.PageNo);
                CreateParameter(cmd, "OrderByColumn", r.OrderByColumn);
                CreateParameter(cmd, "AscOrDesc", r.AscOrDesc);
                CreateParameter(cmd, "IncludeDeletions", r.IncludeDeletions);
                var filteredCountParam = CreateOutPutParameter(cmd, "RecordCount", DbType.Int32);
                var totalCountParam = CreateOutPutParameter(cmd, "TotalRecordCount", DbType.Int32);
                var res = ExecuteSelect(cmd, rdr);
                filteredCount = GetOutPutIntParameter(filteredCountParam);
             totalCount = GetOutPutIntParameter(totalCountParam);
                return res;
            }
        }

        private static int GetOutPutIntParameter(IDbDataParameter intParam)
        {
            int res = 0;
            if (intParam.Value != DBNull.Value)
                res = Convert.ToInt32(intParam.Value);
            return res;
        }
        protected IEnumerable<RedirectModel> ExecuteSelect (IDbCommand cmd, SqlDataReader reader)
        {
            List<RedirectModel> l = new List<RedirectModel>();
            while (reader.Read())
            {
                RedirectModel rm = new RedirectModel();
                rm.RedirectId = (int)reader["RedirectId"];
                rm.DomainId = (EnumDomain)((int)reader["DomainId_fk"]);
                rm.SourceType = (EnumSourceTypeTargetType)(int)reader["SourceType"];
                rm.Source = reader["Source"].ToString();
                rm.TargetType = (EnumSourceTypeTargetType)(int)reader["TargetType"];
                rm.Target = reader["Target"].ToString();
                rm.RedirectType = (EnumRedirectType)(int)reader["RedirectType"];
                rm.DeletionDate = (DateTime?)reader["DeletionDate"];
                l.Add(rm);
            }

            if (!reader.IsClosed)
                reader.Close();
            return l; ;
        }

        protected void CreateParameter(IDbCommand cmd, string parameterName, object value)
        {
            var param = cmd.CreateParameter();
            param.ParameterName = parameterName;
            param.Value = value ?? DBNull.Value;
            cmd.Parameters.Add(param);
        }

        protected IDbDataParameter CreateOutPutParameter(IDbCommand cmd, string parameterName, DbType type)
        {
            var param = cmd.CreateParameter();
            param.ParameterName = parameterName;
            param.Direction = ParameterDirection.Output;
            param.DbType = type;
            cmd.Parameters.Add(param);
            return param;
        }


        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        [HttpPost]
        public IActionResult AddOrEdit(RedirectModel redirect)//[FromBody] 
        {

            // OK
            if (redirect.DomainId == EnumDomain.FR_FR)
                return Ok(new ResultModel
                {
                    Success = true,
                    Message = "insert sucessful",
                    Data = new { RedirectId = 123 }
                });

            if (redirect.RedirectId == null)
                return Ok(new ResultModel
                {
                    Success = true,
                    Message = "insert voor " + redirect.DomainId.ToString(),
                    Data = new { RedirectId = 123 }
                });
            if (redirect.RedirectId.HasValue)
                return Ok(new ResultModel
                {
                    Success = true,
                    Message = "update voor " + redirect.DomainId.ToString() + " succes voll",
                    Data = new { RedirectId = 123 }
                });


            redirect = null;
            //if (ModelState.IsValid)
            //{
            //    try
            //    {
            //        // Update
            //        if (redirect.RedirectId.HasValue && redirect.RedirectId.Value > 0)
            //        {
            //            try
            //            {
            //                RedirectModelList.RedirectList.Add(redirect);
            //            }
            //            catch (Exception e)
            //            {
            //                return  Ok(new ResultModel
            //                {
            //                    Success = false,
            //                    Message = e.Message,
            //                    Data = null
            //                });
            //            }

            //            // Element exist but has been deleted.
            //            return Ok(new   ResultModel
            //            {
            //                Success = false,
            //                Message = "RedirectResources.app_already_deleted",
            //                Data = new { IsDeleted = true }
            //            });
            //        }


            //        if (redirect.RedirectId.HasValue && redirect.RedirectId.Value > 0)
            //        {
            //            RedirectModelList.UpdateRedirectList(redirect);
            //        }

            //        return Ok(new ResultModel
            //        {
            //            Success = false,
            //            Message = "app_add_error"
            //        });
            //    }


            //    catch (Exception exception)
            //    {
            //        return Ok(new ResultModel
            //        {
            //            Success = false,
            //            Message = $"{".app_errors_list"} :<br/> + {exception.Message}"
            //        });
            //    }
            //}

            return Ok(new ResultModel
            {
                Success = false,
                Message = ""
            });



        }



        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
