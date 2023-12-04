using Newtonsoft.Json;
using System.Net;

namespace Contracts.Exceptions
{
  public class VisionRMMApiException : Exception
  {
    public VisionRMMApiException(string msg) : base(msg) { }
    public HttpStatusCode? HttpStatusCode = System.Net.HttpStatusCode.InternalServerError;
    public string VisionRMMMessage = Constants.VissionRMMError;

    public string ToJson()
    {
      return JsonConvert.SerializeObject(new
      {
        StatusCode = HttpStatusCode,
        VisionRMMMessage
      });
    }
  }
}
