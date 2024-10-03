class VXL {
  constructor(ten, hangsx, ngay, gia) {
    this.ten = ten;
    this.hangsx = hangsx;
    this.ngay = ngay;
    this.gia = gia;
  }
}
var vxl1 = new VXL("Core i3 7000", "Intel", "20/11/2011", 3450000);
var vxl2 = new VXL("Core i3 7000", "Intel", "20/11/2011", 3450000);
var arr = [vxl1, vxl2];
var table = document.getElementById("table");
var s = table.innerHTML;
for (i = 0; i < arr.length; i++) {
  stt = i + 1;
  s +=
    "<tr><td> " +
    stt +
    " </td><td>" +
    arr[i].ten +
    "</td><td>" +
    arr[i].hangsx +
    "</td><td>" +
    arr[i].ngay +
    "</td><td>" +
    arr[i].gia +
    "</td></tr>";
}
table.innerHTML = s;

var tenVXL = document.getElementById("ten");
var hangVXL = document.getElementById("hang");
var ngayramat = document.getElementById("ngay");
var giaVXL = document.getElementById("gia");
var thongbao = document.getElementById("thongbao");
var mau = /^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}$/;
function checkData() {
  if (!tenVXL.value || !hangVXL.value || !ngayramat.value || !giaVXL.value) {
    thongbao.innerHTML = "Hãy nhập đủ dữ liệu";
    return false;
  }

  if (!mau.test(ngayramat.value)) {
    thongbao.innerHTML = "Ngày ra mắt không đúng định dạng";
    return false;
  }

  var day = parseInt(ngayramat.value.split("/")[0]);
  var month = parseInt(ngayramat.value.split("/")[1]);
  var year = parseInt(ngayramat.value.split("/")[2]);
  if (month < 1 || month > 12) {
    thongbao.innerHTML = "Tháng không hợp lệ";
    return false;
  }

  var daysInMonth = new Date(year, month, 0).getDate();
  if (day < 1 || day > daysInMonth) {
    thongbao.innerHTML = "Ngày không hợp lệ";
    return false;
  }

  var date = new Date(year, month - 1, day);
  var today = new Date();
  today.setHours(0, 0, 0, 0);

  if (date > today) {
    thongbao.innerHTML = "Ngày không được lớn hơn hôm nay.";
    return false;
  }
  var number = Number(gia.value);
  if (isNaN(number)) {
    thongbao.innerHTML = "Giá trị của giá không đúng";
    return false;
  }
  if(number<0){
    thongbao.innerHTML ="Giá không được nhỏ hơn 0";
    return false;
  }
  return true;
}
function them() {
  if (!checkData()) {
    return;
  }
  thongbao.innerHTML = "";
  var vxl = new VXL(tenVXL.value, hangVXL.value, ngayramat.value, giaVXL.value);
  arr.push(vxl);
  s +=
    "<tr><td> " +
    arr.length +
    " </td><td>" +
    vxl.ten +
    "</td><td>" +
    vxl.hangsx +
    "</td><td>" +
    vxl.ngay +
    "</td><td>" +
    vxl.gia +
    "</td></tr>";
  table.innerHTML = s;
}
function huy() {
  tenVXL.value = "";
  hangVXL.value = "";
  ngayramat.value = "";
  giaVXL.value = "";
}
