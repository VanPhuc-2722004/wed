 // Lấy danh sách các sao và phần tử hiển thị kết quả
 const stars = document.querySelectorAll(".star");
 const output = document.querySelector(".output");

 // Thêm sự kiện click vào mỗi sao
 stars.forEach((star, index) => {
     // Lưu giá trị của sao (index + 1)
     star.starValue = index + 1;

     // Thêm sự kiện click
     star.addEventListener('click', starRate);
 });

 function starRate(e) {
     // Hiển thị số sao người dùng đã chọn
     output.innerHTML = 'You Rated this ' + e.target.starValue + ' stars';

     // Đổi màu các sao đã chọn
     stars.forEach((star, index) => {
         if (index <= e.target.starValue - 1) {
             star.classList.add("orange");
         } else {
             star.classList.remove("orange");
         }
     });
 }