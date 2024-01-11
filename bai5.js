// Yêu cầu người dùng nhập vào số tháng
var userInput = prompt("Nhập vào số tháng:");

// Chuyển đổi giá trị nhập vào thành số nguyên
var month = parseInt(userInput);

// Kiểm tra số tháng và in ra số ngày tương ứng
var numDays;

switch (month) {
  case 1: // Tháng 1
  case 3: // Tháng 3
  case 5: // Tháng 5
  case 7: // Tháng 7
  case 8: // Tháng 8
  case 10: // Tháng 10
  case 12: // Tháng 12
    numDays = 31;
    break;
  case 4: // Tháng 4
  case 6: // Tháng 6
  case 9: // Tháng 9
  case 11: // Tháng 11
    numDays = 30;
    break;
  case 2: // Tháng 2
    // Kiểm tra năm nhuận
    var yearInput = prompt("Nhập vào năm:");
    var year = parseInt(yearInput);
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
      numDays = 29;
    } else {
      numDays = 28;
    }
    break;
  default:
    console.log("Số tháng không hợp lệ.");
    break;
}

if (numDays) {
  console.log("Số ngày trong tháng " + month + " là: " + numDays + " ngày.");
}