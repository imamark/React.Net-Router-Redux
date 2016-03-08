using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;
using Newtonsoft.Json;

namespace ReactRouterRedux.Models
{
    public class InitialState
    {
        [JsonProperty("location")]
        public string Location { get; set; }

        [JsonProperty("metaData")]
        public MetaData MetaData { get; set; }      

        public InitialState()
        {
            Location = HttpContext.Current.Request.RawUrl;
            MetaData = new MetaData();
        }
    }

    public class MetaData
    {
        [JsonProperty("title")]
        public string Title { get; set; }
        [JsonProperty("description")]
        public string Description { get; set; }
    }
}