var arr = ['Bua','Bao','Keo']; // Mảng chứa các lựa chọn của trò chơi: Búa, Bao, Kéo
var c = null, s = null; // Khai báo và khởi tạo các biến c (người chơi) và s (máy tính) với giá trị null.

function getValue(x){ // Hàm này được gọi khi người dùng nhấp vào Búa , Bao , Kéo
  c = x; // Gán x cho c.
  s = Math.floor(Math.random() * 3); // Tạo một số ngẫu nhiên từ 0 đến 2 và gán cho s.
  compare(c, s); // Gọi hàm compare() để so sánh c và s.
}

function compare(c, s){ // Hàm này so sánh c và s để xác định người chiến thắng.
  if(c == s){ // Nếu c và s giống nhau, hiển thị "hòa".
    alert("Huề òi");
  }
  else if((c == 0 && s == 2) || (c == 1 && s == 0) || (c == 2 && s == 1)){ // Nếu c đánh bại s, hiển thị "thắng".
    alert("bạn chỉ thắng cái máy tính");
  }
  else{ // Trường hợp còn lại, hiển thị "thua".
    alert("bạn thua ròi kkk");
  }
}
