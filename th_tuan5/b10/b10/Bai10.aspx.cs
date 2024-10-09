using System;
using System.IO;
using System.Web;

namespace Web10
{
    public partial class Bai10 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (IsPostBack)
            {
                string noidung = Request.Form["txtNoidung"];
                if (!string.IsNullOrEmpty(noidung))
                {
                    htnoidung.InnerHtml = noidung;
                }
                else
                {
                    htnoidung.InnerHtml = "Bạn chưa nhập nội dung";
                }

                var file = Request.Files["txtFile"];
                if (file != null && file.ContentLength > 0)
                {
                    string path = Server.MapPath("~/App_Data/");
                    if (!Directory.Exists(path))
                    {
                        Directory.CreateDirectory(path);
                    }
                    string fileName = Path.GetFileName(file.FileName);
                    string filePath = Path.Combine(path, fileName);
                    file.SaveAs(filePath);

                    tenfile.InnerHtml = fileName;
                    diachifile.InnerHtml = filePath;
                }
            }
        }
    }
}