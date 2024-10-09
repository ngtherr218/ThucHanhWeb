using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace b9
{
    public partial class Xuly : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            // Lấy danh sách từ Application
            List<VXL> list = (List<VXL>)Application["danhsach"];
            if (list == null)
            {
                list = new List<VXL>(); // Khởi tạo danh sách mới nếu chưa tồn tại
            }

            VXL vxl = (VXL)Session["vxl"];
            list.Add(vxl);
            Application["danhsach"] = list;

            string chuoi = "<table border='1'><tr><th>STT</th><th>Tên VXL</th><th>Hãng sx</th><th>Ngày ra mắt</th><th>Giá</th></tr>";
            int index = 1;
            foreach (VXL n in list)
            {
                chuoi += $"<tr><td>{index}</td><td>{n.Ten}</td><td>{n.Hang}</td><td>{n.Ngay}</td><td>{n.Gia}</td></tr>";
                index++;
            }
            chuoi += "</table>";

            table.InnerHtml = chuoi;
        }
    }
}