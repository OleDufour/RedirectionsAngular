using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;

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

        // POST api/values
        //[HttpPost]
        //public void Post([FromBody] string value)


        //{
        //}

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)     {            
        }

        [HttpPost]       
        public IActionResult AddOrEdit( RedirectModel redirect)//[FromBody] 
        {
              redirect =null;
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
