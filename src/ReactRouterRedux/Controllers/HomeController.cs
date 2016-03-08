using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ReactRouterRedux.Models;

namespace ReactRouterRedux.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            var model = new InitialState
            {
                MetaData = new MetaData
                {
                    Title = "Home",
                    Description = "Home page description."
                }
            };
            return View(model);
        }

        public ActionResult About()
        {
            var model = new InitialState
            {
                MetaData = new MetaData
                {
                    Title = "About",
                    Description = "Your application description page."
                }
            };
            return View("Index", model);
        }

        public ActionResult Contact()
        {
            var model = new InitialState
            {
                MetaData = new MetaData
                { 
                    Title = "Contact",
                    Description = "Your contact page."
                }
            };
            return View("Index", model);
        }
    }
}