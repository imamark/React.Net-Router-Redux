using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;

namespace ReactRouterRedux.Models
{
    public class InitialState
    {
        [ScriptIgnore]
        public string Location { get; set; }  
        public MetaData MetaData { get; set; }      

        public InitialState()
        {
            Location = HttpContext.Current.Request.RawUrl;
            MetaData = new MetaData();
        }
    }

    public class MetaData
    {
        public string Title { get; set; }
        public string Description { get; set; }
    }
}