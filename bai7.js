var a = parseFloat(prompt("Nhập số a:"));
var b = parseFloat(prompt("Nhập số b:"));
var c = parseFloat(prompt("Nhập số c:"));

var max = a;
if (b > max){
    max=b;
}
if (c > max){
    max=c;
}

console.log("Số lớn nhất là:" + max);