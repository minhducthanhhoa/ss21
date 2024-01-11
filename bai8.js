var weight = parseFloat(prompt("Nhập cân nặng:"));
var height = parseFloat(prompt("Nhập chiều cao:"));

var BMI = weight / ( height ** 2 );
console.log("BMI =" + BMI);

var phânLoai;

if (BMI < 18.5){
    phânLoai = "Cân nặng thấp";
} else if (BMI >= 18.5 && BMI <= 24.9){
    phânLoai = "Bình thường";
} else if (BMI >= 25){
    phânLoai = "Thừa cân";
} else if (BMI > 25 && BMI <= 29.9){
    phânLoai = "Tiền béo phì";
} else if (BMI >= 30 && BMI <= 34.9){
    phânLoai = "Béo phì độ I";
} else if (BMI >= 35 && BMI <= 39.9){
    phânloai = "Béo phì độ II";
} else {
    phânLoai = "Béo phì độ III";
}

console.log("Phân Loại:" + phânLoai);