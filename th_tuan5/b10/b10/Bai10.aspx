<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Bai10.aspx.cs" Inherits="Web10.Bai10" %>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Bai10</title>
</head>
<body>
    <form id="form1" runat="server" enctype="multipart/form-data" method="post" action="Bai10.aspx">
        <div>
            <label for="txtNoidung">Nội dung:</label><br />
            <textarea id="txtNoidung" name="txtNoidung" rows="5" cols="40"></textarea><br /><br />

            <label for="txtFile">Chọn file:</label><br />
            <input type="file" id="txtFile" name="txtFile" /><br /><br />

            <input type="submit" value="Gửi" />
        </div>
    </form>
    <br />
    <h4>Nội dung đã nhập: </h4>
    <p id="htnoidung" name="htnoidung" runat="server"></p>
    <h4>File đã được lưu: </h4>
    <p id="tenfile" name="tenfile" runat="server"></p>
    <p id="diachifile" name="diachifile" runat="server"></p>

</body>
</html>