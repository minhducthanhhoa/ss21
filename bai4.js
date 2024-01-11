// Yêu cầu người dùng nhập vào một số
var userInput = prompt("Nhập vào một số:");

// Chuyển đổi giá trị nhập vào thành số
var number = parseFloat(userInput);

// Sử dụng toán tử 3 ngôi để kiểm tra và hiển thị kết quả
var result = number >= 0 ? "Số dương" : "Số âm";
console.log(result);