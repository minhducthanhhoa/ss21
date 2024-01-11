// Yêu cầu người dùng nhập vào một số
var userInput = prompt("Nhập vào một số bất kỳ:");

// Kiểm tra xem số nhập vào có phải là một số hay không
if (!isNaN(userInput)) {
  var number = parseInt(userInput);

  // Kiểm tra số chẵn
  if (number % 2 === 0) {
    console.log(number + " là số chẵn.");
  }
  // Kiểm tra số lẻ
  else {
    console.log(number + " là số lẻ.");
  }
}
// Số không hợp lệ
else {
  console.log("Giá trị không hợp lệ.");
}