using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Xml;

namespace b92
{
    public partial class Xuly : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            string ten = Request.Form["ten"];
            string hang = Request.Form["hang"];
            string ngay = Request.Form["ngay"];
            string gia = Request.Form["gia"];

            // Tạo một tài liệu XML
            XmlDocument doc = new XmlDocument();
            XmlElement root = doc.CreateElement("SanPham");

            // Thêm phần tử con cho tên
            XmlElement tenElement = doc.CreateElement("Ten");
            tenElement.InnerText = ten;
            root.AppendChild(tenElement);

            // Thêm phần tử con cho hãng
            XmlElement hangElement = doc.CreateElement("Hang");
            hangElement.InnerText = hang;
            root.AppendChild(hangElement);

            // Thêm phần tử con cho ngày sản xuất
            XmlElement ngayElement = doc.CreateElement("NgaySanXuat");
            ngayElement.InnerText = ngay;
            root.AppendChild(ngayElement);

            // Thêm phần tử con cho giá
            XmlElement giaElement = doc.CreateElement("Gia");
            giaElement.InnerText = gia;
            root.AppendChild(giaElement);

            // Thêm phần tử gốc vào tài liệu
            doc.AppendChild(root);

            // Thiết lập kiểu nội dung và xuất XML
            Response.ContentType = "text/xml"; // Thiết lập kiểu nội dung là XML
            Response.Write(doc.OuterXml); // Xuất XML ra trình duyệt
            Response.End(); // Kết thúc phản hồi để ngăn không xuất thêm nội dung
        }
    }
}