var a = parseInt(prompt("Toán hạng a: ")); // Hiển thị hộp thoại yêu cầu người dùng nhập toán hạng a, sau đó chuyển đổi giá trị nhập vào thành số nguyên.
var b = parseInt(prompt("Toán hạng b: ")); // Tương tự như trên, nhưng cho toán hạng b.
var o = prompt("Toán tử: "); // Hiển thị hộp thoại yêu cầu người dùng nhập toán tử.
switch(o){ // Sử dụng câu lệnh switch để xử lý các trường hợp khác nhau dựa trên toán tử đã nhập.
case '+': // Trường hợp toán tử là dấu cộng.
var kq = a + b; // Thực hiện phép cộng giữa a và b.
alert("Tổng: " + kq); // Hiển thị kết quả.
break; // Kết thúc trường hợp này.
case '-': 
var kq = a - b; // Thực hiện phép cộng giữa a và b.
alert("Hiệu: " + kq); 
case '*':
    var kq = a * b; // Thực hiện phép cộng giữa a và b.
alert("tích: " + kq); 
case '/': 
var kq = a / b; // Thực hiện phép cộng giữa a và b.
if(b != 0){ // Kiểm tra nếu mẫu số không bằng 0.
var kq = a / b; // Thực hiện phép chia.
alert("Thương: " + kq); // Hiển thị kết quả.
}
else{ // Trường hợp mẫu số bằng 0.
alert("Không thể chia cho 0"); // Hiển thị thông báo lỗi.
}
break; // Kết thúc trường hợp này.
default: // Trường hợp toán tử nhập vào không phải là một trong các toán tử đã xác định.
alert(o + " không phải là toán tử"); // Hiển thị thông báo lỗi.
break; // Kết thúc trường hợp này.
}
