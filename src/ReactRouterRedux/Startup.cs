using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(ReactRouterRedux.Startup))]
namespace ReactRouterRedux
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
