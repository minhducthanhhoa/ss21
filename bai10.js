// 1.Câu lệnh if/else
var x = 5;

// Sử dụng câu lệnh if/else để kiểm tra giá trị của biến x
if (x > 0) {
  console.log("x là một số dương");
} else if (x < 0) {
  console.log("x là một số âm");
} else {
  console.log("x là số không");
}


// 2.Câu lệnh witch/case
var dayOfWeek = 1;
var dayName;

// Sử dụng câu lệnh switch/case để xác định tên của ngày trong tuần dựa trên giá trị của biến dayOfWeek
switch (dayOfWeek) {
  case 1:
    dayName = "Thứ Hai";
    break;
  case 2:
    dayName = "Thứ Ba";
    break;
  case 3:
    dayName = "Thứ Tư";
    break;
  case 4:
    dayName = "Thứ Năm";
    break;
  case 5:
    dayName = "Thứ Sáu";
    break;
  case 6:
    dayName = "Thứ Bảy";
    break;
  case 7:
    dayName = "Chủ Nhật";
    break;
  default:
    dayName = "Không xác định";
    break;
}

console.log("Hôm nay là: " + dayName);