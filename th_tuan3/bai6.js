var zodiac = document.getElementById("zodiac");
var dateTime = document.getElementById("date");
var mau = /^[0-9]{1,2}\/[0-9]{1,2}(\/[0-9]{4})?$/;
dateTime.focus();

function check(firstMonth, lastMonth, firstDate, lastDate, day, month) {
  if (
    (month == firstMonth && day >= firstDate) ||
    (month == lastMonth && day <= lastDate)
  ) {
    return true;
  } else return false;
}

function setZodiac(yourZodiac) {
  zodiac.value = yourZodiac;
}

function checkDateTime(day, month) {
  var year = dateTime.value.split("/")[2];
  if (dateTime.value == "") {
    alert("Nhập vào ngày tháng");
    return false;
  }
  if (!mau.test(dateTime.value)) {
    alert("Mẫu không hợp lệ");
    return false;
  }

  day = parseInt(day);
  month = parseInt(month);

  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      if (day >= 1 && day <= 31) {
        return true;
      }else{
        alert("Ngày không hợp lệ");
        return false;
      }

    case 4:
    case 6:
    case 9:
    case 11:
      if (day >= 1 && day <= 30) {
        return true;
      }else{
        alert("Ngày không hợp lệ");
        return false;
      }

    case 2:
      if (year) {
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
          if (day >= 1 && day <= 29) {
            return true;
          }
          else{
            alert("Ngày không hợp lệ");
            return false;
          }
        } else {
          if (day >= 1 && day <= 28) {
            return true;
          }else{
            alert("Ngày không hợp lệ");
            return false;
          }
        }
      } else {
        if (day >= 1 && day <= 29) {
          return true;
        }
        else{
          alert("Ngày không hợp lệ");
          return false;
        }
      }
    default:
      alert("Tháng không hợp lệ");
      return false;
  }
}
function checkZodiac() {
  var day = dateTime.value.split("/")[0];
  var month = dateTime.value.split("/")[1];

  if (!checkDateTime(day, month)) {
    dateTime.focus();
    return;
  }

  if (check(3, 4, 21, 20, day, month)) {
    setZodiac("Bạch Dương");
  } else if (check(4, 5, 21, 20, day, month)) {
    setZodiac("Kim Ngưu");
  } else if (check(5, 6, 21, 21, day, month)) {
    setZodiac("Song Tử");
  } else if (check(6, 7, 22, 22, day, month)) {
    setZodiac("Cự Giải");
  } else if (check(7, 8, 23, 22, day, month)) {
    setZodiac("Sư Tử");
  } else if (check(8, 9, 23, 22, day, month)) {
    setZodiac("Xử Nữ");
  } else if (check(9, 10, 23, 23, day, month)) {
    setZodiac("Thiên Bình");
  } else if (check(10, 11, 24, 22, day, month)) {
    setZodiac("Bọ Cạp");
  } else if (check(11, 12, 23, 21, day, month)) {
    setZodiac("Nhân Mã");
  } else if (check(12, 1, 22, 19, day, month)) {
    setZodiac("Ma Kết");
  } else if (check(1, 2, 20, 18, day, month)) {
    setZodiac("Bảo Bình");
  } else {
    setZodiac("Song Ngư");
  }
}

function clearData() {
  zodiac.value = "";
  dateTime.value = "";
}
