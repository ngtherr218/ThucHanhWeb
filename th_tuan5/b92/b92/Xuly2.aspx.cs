using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Xml;
using System.Xml.Linq;

namespace b92
{
    public partial class Xuly2 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            string ten = Request.QueryString["ten"];
            string hang = Request.QueryString["hang"];
            string ngay = Request.QueryString["ngay"];
            string gia = Request.QueryString["gia"];

            XmlDocument doc = new XmlDocument();
            XmlElement root = doc.CreateElement("SanPham");

            XmlElement tenElement = doc.CreateElement("Ten");
            tenElement.InnerText = ten;
            root.AppendChild(tenElement);

            XmlElement hangElement = doc.CreateElement("Hang");
            hangElement.InnerText = hang;
            root.AppendChild(hangElement);

            XmlElement ngayElement = doc.CreateElement("NgaySanXuat");
            ngayElement.InnerText = ngay;
            root.AppendChild(ngayElement);

            XmlElement giaElement = doc.CreateElement("Gia");
            giaElement.InnerText = gia;
            root.AppendChild(giaElement);

            doc.AppendChild(root);

            string filePath = Server.MapPath("~/App_Data/SanPham.xml");
            doc.Save(filePath);

            Response.ContentType = "text/xml";
            Response.Write(doc.OuterXml);
            Response.End();
        }
    }
}