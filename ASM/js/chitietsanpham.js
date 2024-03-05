function toggleDelete(button) {
    let productDiv = button.closest('.product');
  
    // Kiểm tra xem sản phẩm có tồn tại không
    if (productDiv) {
      // Xóa sản phẩm khỏi mảng
      let index = Array.from(productDiv.parentElement.children).indexOf(productDiv);
      mang.splice(index, 1);
  
      // Cập nhật lại localStorage
      localStorage.setItem('data', JSON.stringify(mang));
  
      // Xóa sản phẩm khỏi giao diện
      productDiv.remove();
  
      // Cập nhật tổng giá trị sau khi xóa sản phẩm
      updateTotalValue();
    }
    button.classList.toggle('active');
  }
  
  // Hàm cập nhật tổng giá trị
  function updateTotalValue() {
    let tongGiaTri = 0;
  
    // Vòng lặp xây dựng HTML cho từng sản phẩm và cập nhật tổng giá trị
    for (let i = 0; i < mang.length; i++) {
      // ... (các phần code khác)
      tongGiaTri += parseFloat(mang[i].gia) || 0; // Sử dụng parseFloat để chuyển đổi sang số
    }
  
    // Cập nhật nội dung của thẻ <h2> sau khi vòng lặp
    document.querySelector("#tong_tien_cac_sp").innerHTML = "Tổng cộng:" + tongGiaTri.toLocaleString() + "0,000" + "đ";
    updateSoLuongTrongGio();
  }
  
  // ... (các phần code khác)
  
  
  
  function toggleFavorite(button) {
      button.classList.toggle('active');
  }
  //
  let mang = [];
  let kq='';
  let tongGiaTri = 0; // Thêm biến tổng giá trị
  if(mang[0] == null){
  
  let data = JSON.parse(localStorage.getItem('data'));
  mang = data;
  console.log(mang);
  
  }
  for(let i = 0 ;  i < mang.length ; i++ ){
  
      kq += `
      <div class="product">
        <input type="checkbox" id="product1" name="product1">
        <div class="product-tt">
          <img src="${mang[i].img}" alt="">
          <div class="product-details">
            <h3>${mang[i].ten}</h3>
            <select>
              <option selected>Tím 254Gb</option>
              <option selected>Titanium 1T</option>
            </select>
            <p class="price">${mang[i].gia}</p>
          </div>
        </div>
        <div class="quantity">
        
          <input type="number" id="quantity" name="quantity" min="1" max="5">
          
        </div>
        <div class="actions">
          <button class="favorite" onclick="toggleFavorite(this)"><i class="fas fa-heart"></i></button>
          <button class="delete" onclick="toggleDelete(this)"><i class="fas fa-trash"></i></button>
        </div>
      </div>`;
  
  
  }
  // Xuất items
  document.querySelector(".items").innerHTML = kq;
  
  
  // ... (các phần code khác)
  
  // Vòng lặp xây dựng HTML cho từng sản phẩm và cập nhật tổng giá trị
  for (let i = 0; i < mang.length; i++) {
    // ... (các phần code khác)
  
    // Cập nhật tổng giá trị
    tongGiaTri += parseFloat(mang[i].gia) || 0; // Sử dụng parseFloat để chuyển đổi sang số
  }
  
  // Cập nhật nội dung của thẻ <h2> sau khi vòng lặp
  document.querySelector("#tong_tien_cac_sp").innerHTML ="Tổng cộng:" +tongGiaTri.toLocaleString()+"0,000" + "đ";
  // Gọi hàm cập nhật tổng giá trị khi trang được tải
  updateTotalValue();
  
  
  
  
  
  
   