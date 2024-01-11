// Yêu cầu người dùng nhập vào 3 số a, b và c
var a = parseFloat(prompt("Nhập số a:"));
var b = parseFloat(prompt("Nhập số b:"));
var c = parseFloat(prompt("Nhập số c:"));

// Tạo một mảng chứa 3 số
var arr = [a, b, c];

// Sắp xếp mảng theo thứ tự tăng dần
arr.sort(function(a, b) {
  return a - b;
});


console.log("Các số theo thứ tự tăng dần: " + arr.join(", "));