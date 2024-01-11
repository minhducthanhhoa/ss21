// Yêu cầu người dùng nhập điểm các môn học
var diemToan = parseFloat(prompt("Nhập điểm môn Toán:"));
var diemVan = parseFloat(prompt("Nhập điểm môn Văn:"));
var diemAnh = parseFloat(prompt("Nhập điểm môn Anh:"));

// Tính điểm trung bình các môn học
var diemTrungBinh = (diemToan + diemVan + diemAnh) / 3;

// Hiển thị điểm trung bình
console.log("Điểm trung bình: " + diemTrungBinh.toFixed(1));

// Xếp loại điểm trung bình
var xepLoai;

if (diemTrungBinh >= 8.0 && diemTrungBinh <= 10) {
  xepLoai = "GIỎI";
} else if (diemTrungBinh >= 6.5 && diemTrungBinh <= 7.9) {
  xepLoai = "KHÁ";
} else if (diemTrungBinh >= 5.0 && diemTrungBinh <= 6.4) {
  xepLoai = "TRUNG BÌNH";
} else {
  xepLoai = "YẾU";
}

// Hiển thị xếp loại
console.log("Xếp loại: " + xepLoai);