// bai3
let weight = prompt("Nhập trọng lượng cơ thể (kg)"); // Dòng này yêu cầu người dùng nhập trọng lượng cơ thể của họ.
let height = prompt("Nhập chiều cao (m)"); // Dòng này yêu cầu người dùng nhập chiều cao của họ.
let bmi = weight / (height * height); // Dòng này tính chỉ số BMI.
if(bmi < 18.5){
 alert("Bạn đang thiếu cân"); // Nếu BMI nhỏ hơn 18.5, dòng này thông báo rằng người dùng đang thiếu cân.
} 
else if(bmi >= 18.5 && bmi < 25){
 alert("Bạn đang ở mức cân đối"); // Nếu BMI từ 18.5 đến 25, dòng này thông báo rằng người dùng đang ở mức cân đối.
} 
else if(bmi >= 25 && bmi < 30){
 alert("Bạn đang thừa cân"); // Nếu BMI từ 25 đến 30, dòng này thông báo rằng người dùng đang thừa cân.
}
else{
 alert("Bạn đang béo phì"); // Nếu BMI lớn hơn 30, dòng này thông báo rằng người dùng đang béo phì.
}