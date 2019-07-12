using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using RedirectionsAngular.Model;
using System.Data.SqlClient;
using System.Data;
using Microsoft.AspNetCore.Http;
using CsvHelper.Configuration;
using CsvHelper;
using System.IO;
using CsvHelper.TypeConversion;

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

        // [Route("redirect/getdatatableredirects")]
        public DataTablesReturnData<RedirectModel> Search(DataTablesParameters dataTablesParameters)
        {
            //var r = new RedirectPaging();
            // r.DomainId = (EnumDomain)parms.DomainId;
            //r.OrderByColumn = RedirectBusinessModule.OrderByColumn(parameters);
            //r.AscOrDesc = RedirectBusinessModule.AscOrDesc(parameters);
            //r.PageNo = parms.Start / parms.Length + 1;
            //r.PageSize = parms.Length;
            //r.IncludeDeletions = parms.IncludeDeletions;

            //foreach (var p in parms.Columns)
            //{
            //    switch (p.Data)
            //    {
            //        case nameof(r.SourceType): r.SourceType = (EnumSourceTypeTargetType)Convert.ToInt16(p.SearchValue); break;
            //        case nameof(r.Source): r.Source = p.SearchValue; break;
            //        case nameof(r.TargetType): r.TargetType = (EnumSourceTypeTargetType)Convert.ToInt16(p.SearchValue); break;
            //        case nameof(r.Target): r.Target = p.SearchValue; break;
            //        case nameof(r.RedirectType): r.RedirectType = (EnumRedirectType)Convert.ToInt16(p.SearchValue); break;
            //    }
            //}
            var res = GetRedirectsForPaging(dataTablesParameters, out var filteredCount, out var totalCount);//
                                                                                                             //return new DataTablesReturnData<RedirectModel>
                                                                                                             //{
                                                                                                             //    Draw = parameters.Draw,
                                                                                                             //    RecordsFiltered = filteredCount,
                                                                                                             //    RecordsTotal = totalCount,
                                                                                                             //    Data = RedirectViewModelMapper.DtosToModels(res)
                                                                                                             //};
            return new DataTablesReturnData<RedirectModel>
            {

                RecordsFiltered = filteredCount,
                RecordsTotal = totalCount,
                Data = res
            };


        }

        IEnumerable<RedirectModel> GetRedirectsForPaging(DataTablesParameters dataTablesParameters, out int filteredCount, out int totalCount)
        {
            using (var cnx = new SqlConnection(@"Data Source=SGEW0090\SQLEXPRESS;Initial Catalog=Front_Admin;Integrated Security=True"))
            {
                cnx.Open();
                SqlCommand cmd = new SqlCommand("seo.sp_GetRedirectsForPaging", cnx);
                cmd.CommandType = CommandType.StoredProcedure;

                int sourceType = dataTablesParameters.RedirectModel.SourceType == null ? -1 : (int)dataTablesParameters.RedirectModel.SourceType;
                int targetType = dataTablesParameters.RedirectModel.TargetType == null ? -1 : (int)dataTablesParameters.RedirectModel.TargetType;
                int redirectType = dataTablesParameters.RedirectModel.RedirectType == null ? -1 : (int)dataTablesParameters.RedirectModel.RedirectType;

                CreateParameter(cmd, "DomainId", dataTablesParameters.RedirectModel.DomainId);
                CreateParameter(cmd, "SourceType", sourceType);
                CreateParameter(cmd, "Source", dataTablesParameters.RedirectModel.Source);
                CreateParameter(cmd, "TargetType", targetType);
                CreateParameter(cmd, "Target", dataTablesParameters.RedirectModel.Target);
                CreateParameter(cmd, "RedirectType", redirectType);
                CreateParameter(cmd, "PageSize", dataTablesParameters.PageSize);
                CreateParameter(cmd, "PageNo", dataTablesParameters.PageNo);
                CreateParameter(cmd, "OrderByColumn", dataTablesParameters.OrderByColumn);
                CreateParameter(cmd, "AscOrDesc", dataTablesParameters.AscOrDesc);
                CreateParameter(cmd, "IncludeDeletions", false);
                var filteredCountParam = CreateOutPutParameter(cmd, "RecordCount", DbType.Int32);
                var totalCountParam = CreateOutPutParameter(cmd, "TotalRecordCount", DbType.Int32);
                SqlDataReader rdr = cmd.ExecuteReader();
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
        protected IEnumerable<RedirectModel> ExecuteSelect(IDbCommand cmd, SqlDataReader reader)
        {
            List<RedirectModel> l = new List<RedirectModel>();
            while (reader.Read())
            {
                RedirectModel rm = new RedirectModel();
                rm.RedirectId = (int)reader["RedirectId"];
                rm.DomainId = (EnumDomain)Convert.ToInt32(reader["DomainId_fk"]);
                rm.SourceType = (EnumSourceTypeTargetType)Convert.ToInt32(reader["SourceType"]);
                rm.Source = reader["Source"].ToString();
                rm.TargetType = (EnumSourceTypeTargetType)Convert.ToInt32(reader["TargetType"]);
                rm.Target = reader["Target"].ToString();
                rm.RedirectType = (EnumRedirectType)Convert.ToInt32(reader["RedirectType"]);
                rm.DeletionDate = reader["DeletionDate"] == DBNull.Value ? null : (DateTime?)reader["DeletionDate"];
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

        [HttpPost]
        // [Authorize(Policy = AuthorizePolicyConsts.Redirect_Read_Write)]
        //   [Route("redirect/import")]
        public ActionResult Import(IFormFile file, int? domainId = null)
        {
            var redirects = new List<RedirectModel>();

            var current_line = 2; //not 0 to skip header
            using (var stream = file.OpenReadStream())
            {
                var conf = new Configuration()
                {
                    Delimiter = ";",
                    // disable header and field validation, not all fields are present in the csv file
                    HeaderValidated = null,
                    MissingFieldFound = null,
                    TrimOptions = TrimOptions.Trim,
                    IgnoreBlankLines = true,
                    // Deal with spotty headers, � characters appears sometimes (from Excel ?)
                    PrepareHeaderForMatch = (string header, int index) => header.Replace("�", string.Empty).ToLower().Trim()
                };

                using (var reader = new CsvReader(new StreamReader(stream), conf))
                {
                    // Ignore header case.
                    while (reader.Read())
                    {
                        RedirectModel dto = null;
                        try
                        {
                            var record = reader.GetRecord<RedirectModel>();

                        
                        }
                        catch (ReaderException) // Le fichier est aussi corrompu que François Fillon.
                        {
                            // report.AddReport(RedirectResources.app_redirect_csvfile_invalidformat, 0);
                            return BadRequest();
                        }

                        catch (TypeConverterException e)
                        {
                            //    report.AddReport(e.Text + " " + RedirectResources.app_invalid_value, current_line);
                        }
                        catch (Exception) // Le fichier est aussi corrompu que François Fillon.
                        {
                            // report.AddReport(RedirectResources.app_redirect_csvfile_invalidformat, 0);
                            return BadRequest();
                        }


                        if (dto != null)
                        {
                            redirects.Add(dto);
                        }
                        current_line++;
                    }
                }
            }


            return Ok();

        }




    }
}
