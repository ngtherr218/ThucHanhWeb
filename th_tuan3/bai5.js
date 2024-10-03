var chain = document.getElementById("input");
var list = document.getElementById("list");
var notification = document.getElementById("notification")
chain.focus();

function execute() {
  if (chain.value == "") {
    alert("Vui lòng nhập nội dung của chuỗi");
    chain.focus();
  } else {
    var arr = chain.value.split(",");
    var s;
    for (i = 0; i < arr.length; i++) {
      s = s + "<option id = option" + i + " value ="+arr[i]+">" + arr[i] + "</option>";
    }
    list.innerHTML = s;
  }
}
function del() {
  chain.value = "";
  list.innerHTML = "";
}
function select() {
  notification.innerHTML="Bạn đã chọn mục "+ list.options[list.selectedIndex].value;
}
