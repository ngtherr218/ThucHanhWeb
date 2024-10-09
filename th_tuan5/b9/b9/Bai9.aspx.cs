using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace b9
{
    public partial class Bai9 : System.Web.UI.Page
    {
        private void DEBUG(string value)
        {
            System.Diagnostics.Debug.WriteLine(value);
        }
        protected void Page_Load(object sender, EventArgs e)
        {
            if (IsPostBack)
            {
                VXL vxl = new VXL();
                //Post
                vxl.Ten = Request.Form["ten"];
                vxl.Hang = Request.Form["hang"];
                vxl.Ngay = Request.Form["ngay"];
                string gia = Request.Form["gia"];


                //Get
                //vxl.Ten = Request.QueryString["ten"];
                //vxl.Hang = Request.QueryString["hang"];
                //vxl.Ngay = Request.QueryString["ngay"];
                //string gia = Request.QueryString["gia"];

                double parsedGia;
                if (Double.TryParse(gia, out parsedGia))
                {
                    vxl.Gia = parsedGia; // Chuyển đổi thành công
                }
                else
                {
                    vxl.Gia = 0; // Giá trị mặc định nếu chuyển đổi thất bại
                }

                Session["vxl"] = vxl;
                Response.Redirect("Xuly.aspx");
            }
        }
    }
}
