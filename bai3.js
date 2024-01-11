// Yêu cầu người dùng nhập vào một số
var userInput = prompt("Nhập vào một số từ 2 đến 8:");

// Chuyển đổi giá trị nhập vào thành số nguyên
var number = parseInt(userInput);

// Kiểm tra số nhập vào và hiển thị ngày trong tuần tương ứng
if (number >= 2 && number <= 8) {
  var daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  var day = daysOfWeek[number - 2];
  console.log(day);
} else {
  console.log("Giá trị không hợp lệ.");
}