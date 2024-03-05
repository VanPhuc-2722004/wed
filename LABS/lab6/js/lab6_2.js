 // khởi tạo biến để theo dõi trạng thái hiện tại (X hoặc O)
 let flat = true;

 // biến đếm số lượng nút đã được nhấp
 let counter = 0;

 // lấy tất cả các nút button trong mảng
 let btn = document.querySelectorAll('button');

 // Hàm kiểm tra xem có thắng hay không
 function checkWin() {
     const lines = [
         [0, 1, 2], // rows
         [3, 4, 5],
         [6, 7, 8],
         [0, 3, 6], // columns
         [1, 4, 7],
         [2, 5, 8],
         [0, 4, 8], // diagonals
         [2, 4, 6]
     ];

     for (const line of lines) {
         const [a, b, c] = line;
         if (btn[a].innerText && btn[a].innerText === btn[b].innerText && btn[a].innerText === btn[c].innerText) {
             return true; // Win
         }
     }

     return false; // No win yet
 }

 // duyệt qua từng nút button
 for (let index = 1; index <= btn.length; index++) {
     const element = btn[index - 1];

     // gắn sự kiện 'click' cho mỗi nút button
     element.addEventListener('click', () => {
         // tăng biến đếm
         counter++;

         // kiểm tra nếu đang là lượt chơi X hoặc O
         if (flat) {
             // đặt màu và văn bản cho X
             element.style.backgroundColor = 'blue';
             element.innerText = 'X';
         } else {
             // đang là lượt chơi O
             // đặt màu và văn bản cho O
             element.style.backgroundColor = 'pink';
             element.innerText = 'O';
         }

         // kiểm tra nếu đã thắng
         if (checkWin()) {
             // hiển thị thông báo "Win" và refresh trang web
             alert('Congratulations! You Win!');
             location.reload();
         }

         // kiểm tra nếu đã đạt đến số lần nhấp tối đa
         if (counter === 9) {
             // hiển thị thông báo "Game Over" và refresh trang web
             alert('Game Over');
             location.reload();
         }

         // tắt sự kiện click cho nút đã được nhấp
         element.style.pointerEvents = 'none';

         // đảo trạng thái để chuyển lượt chơi
         flat = !flat;
     });
 }