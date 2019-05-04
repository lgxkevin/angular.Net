using Microsoft.AspNetCore.Http;

namespace angularNet.API.Helpers
{
    public static class Extension
    {
        public static void AddApplicationError (this HttpResponse response, string message)
        {
            response.Headers.Add("Application-Error", message);
            response.Headers.Add("Access-control-Expose-Headers", "Application-Error");
            response.Headers.Add("Access-Control-Allow-Origin","*");
        }
    }
}