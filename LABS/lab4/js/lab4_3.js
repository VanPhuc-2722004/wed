function hienThiThoiGian() {
  let date = new Date();
  let hours = date.getHours().toString().padStart(2, '0');
  let minutes = date.getMinutes().toString().padStart(2, '0');
  let seconds = date.getSeconds().toString().padStart(2, '0');
  
  let time = hours + ":" + minutes + ":" + seconds;
  
  document.getElementById("demo").innerHTML = time;
}

setInterval(hienThiThoiGian, 1000);
