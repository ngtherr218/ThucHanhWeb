<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Bai9.aspx.cs" Inherits="b9.Bai9" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Bài 9</title>
    <link rel="stylesheet" href="style.css" />
</head>
<body>
    <form id="form1" runat="server" method="post" onsubmit="return checkData()">
        <div class="container-input" id="container-input">
            <table>
                <tr>
                    <td>Tên VXL</td>
                    <td>
                        <input type="text" id="ten" name="ten"/></td>
                </tr>
                <tr>
                    <td>Hãng</td>
                    <td>
                        <input type="text" id="hang" name="hang" /></td>
                </tr>
                <tr>
                    <td>Ngày ra mắt</td>
                    <td>
                        <input type="text" id="ngay" placeholder="dd/mm/yyyy" name="ngay"/></td>
                </tr>
                <tr>
                    <td>Giá</td>
                    <td>
                        <input type="text" id="gia" name="gia" /></td>
                </tr>
            </table>
            <div class="button" id="button">
                <input id="btnThem" type="submit" value="Thêm" />
                <input id="btnHuy" type="reset" value="Hủy"/>
            </div>
            <p id="thongbao"></p>
        </div>
    </form>
    <script src="js.js"></script>
</body>
</html>
