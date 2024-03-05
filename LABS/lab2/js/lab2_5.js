var x = 10 + Math.round(5 * Math.random()); // Dòng này tạo ra một số ngẫu nhiên từ 10 đến 15.
var a = prompt("Nhập số của bạn"); // Dòng này yêu cầu người dùng đoán số.
if(a == x){ 
 alert("Chúc mừng, bạn đã đoán đúng"); // Nếu người dùng đoán đúng, dòng này hiển thị một thông điệp chúc mừng.
} 
else if (a > x){
 alert("Giá trị của bạn lớn hơn số bí mật"); // Nếu người dùng đoán cao hơn, dòng này thông báo cho họ biết.
} 
else{ 
 alert("Giá trị của bạn nhỏ hơn số bí mật"); // Nếu người dùng đoán thấp hơn, dòng này thông báo cho họ biết.
}