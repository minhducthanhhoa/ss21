var answer = prompt("Bạn sinh năm bao nhiêu?"); 

var currentYear = new Date().getFullYear(); // Lấy năm hiện tại

// Kiểm tra xem câu trả lời có phải là một số hay không
if (!isNaN(answer)) {
  var birthYear = parseInt(answer);
  var age = currentYear - birthYear;
  console.log("Tuổi của bạn là: " + age);
} else {
  console.log("Giá trị không hợp lệ");
} 