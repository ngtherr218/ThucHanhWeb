var div_hang = document.getElementById("div_hang");
var them_luu = document.getElementById("them_luu");
var ds_hang = document.getElementById("ds_hang");
var hang = document.getElementById("hang");
var flag = 0;
var arr = ["Intel", "AMD", "SQ1", "SQ2", "Apple M1", "Apple M2"];
var s = "";
for (i = 0; i < arr.length; i++) {
  s += "<option id=" + arr[i] + " value=" + arr[i] + ">" + arr[i] + "</option>";
}
ds_hang.innerHTML = s;

function them() {
  div_hang.style.visibility = "visible";
  hang.value = "";
  them_luu.innerHTML = "Lưu";
  flag = 1;
}

function luu() {
  if (hang.value == "") {
    alert("Không được để trống!");
    hang.focus;
    return;
  }
  div_hang.style.visibility = "hidden";
  them_luu.innerHTML = "Thêm";
  flag = 0;
  if (hang.value == "") {
    alert("Hãng kông được để trống!");
    hang.focus;
    return;
  }
  for (i = 0; i < arr.length; i++) {
    if (arr[i].toLowerCase() == hang.value.trim().toLowerCase()) {
      alert("Hãng đã tồn tại");
      return;
    }
  }
  arr.push(hang.value.trim());
  s =
    "<option id=" +
    hang.value +
    " value=" +
    hang.value +
    ">" +
    hang.value +
    "</option>" +
    s;
  ds_hang.innerHTML = s;
}

function them_luuHang() {
  switch (flag) {
    case 0:
      them();
      break;
    case 1:
      luu();
      break;
  }
}

function huy() {
  div_hang.style.visibility = "hidden";
  them_luu.innerHTML = "Thêm";
  hang.value = "";
  flag = 0;
}
