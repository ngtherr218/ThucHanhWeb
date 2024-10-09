using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.SessionState;

namespace b9
{
    public class Global : System.Web.HttpApplication
    {

        protected void Application_Start(object sender, EventArgs e)
        {
            // Khởi tạo danh sách và thêm các đối tượng VXL vào
            Application["danhsach"] = new List<VXL>();
            List<VXL> ds = (List<VXL>)Application["danhsach"];

            VXL vxl1 = new VXL
            {
                Ten = "Core i3 7100",
                Hang = "Intel",
                Ngay = "20/11/2011",
                Gia = 3450000
            };
            ds.Add(vxl1);

            VXL vxl2 = new VXL
            {
                Ten = "Core i5 7200U",
                Hang = "Intel",
                Ngay = "15/08/2015",
                Gia = 5500000
            };
            ds.Add(vxl2);

            Application["danhsach"]=ds;
        }

        protected void Session_Start(object sender, EventArgs e)
        {

        }

        protected void Application_BeginRequest(object sender, EventArgs e)
        {

        }

        protected void Application_AuthenticateRequest(object sender, EventArgs e)
        {

        }

        protected void Application_Error(object sender, EventArgs e)
        {

        }

        protected void Session_End(object sender, EventArgs e)
        {

        }

        protected void Application_End(object sender, EventArgs e)
        {

        }
    }
}
