let m2 = prompt("Nhập giá trị diện tích đất (m2)"); // Dòng này yêu cầu người dùng nhập diện tích đất.
let sao = m2 / 360; // Dòng này chuyển đổi diện tích đất từ mét vuông sang sào.
let mau = m2 / 3600; // Dòng này chuyển đổi diện tích đất từ mét vuông sang mẫu.
let ha = m2 / 10000; // Dòng này chuyển đổi diện tích đất từ mét vuông sang héc-ta.

alert(m2 + " m2 đất tương đương " + sao + " sào = " + mau + " mẫu (Nam Bộ) = " + ha + " ha"); 
// Dòng này hiển thị một hộp thông báo với các giá trị tương đương của diện tích đất.