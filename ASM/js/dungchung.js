function addHeader() {
     // Tạo một thẻ <link> mới
     var link = document.createElement('link');

     // Đặt các thuộc tính cho thẻ <link>
     link.rel = 'stylesheet';
     link.type = 'text/css';
     link.href = 'css/header.css'; // Thay đổi đường dẫn này thành đường dẫn thực tế đến tệp CSS của bạn
 
     // Thêm thẻ <link> vào phần <head> của tài liệu
     document.getElementsByTagName('head')[0].appendChild(link);
 
     // Phần còn lại của mã JavaScript của bạn

    document.write(`        
	<header>
		<nav class="nav1">
<div></div>
		</nav>

		<nav>
			<!-- logo thế giới di động -->
			<a href="#" id="a1">
				<img src="img/logo.png" alt="" style="height: 65px;width: 250px;">
			</a>

			<!-- xem khu vực -->
			<a href="#" id="a2">
				<div>
					<span>Xem giá, tồn kho tại:</span>
					<span>Đắk Lắk
					</span>
					<span></span>
				</div>
			</a>

			<!-- tìm kiếm -->
			<a class="a-form" id="a3">
				<form>
					<input type="text" name="" placeholder="Bạn tìm gì...">
					<i class='bx bx-search'></i>
				</form>
			</a>			

			<a href="#" id="a4">
				<div>
					<span>Lịch sử đơn</span>
					<span>hàng</span>
				</div>
			</a>

			<a href="giohang.html" id="a5">
				<div>
					<div class="div-img"></div>
					<span>Giỏ hàng</span>
                    <span id="soLuongTrongGio"></span> 
				</div>
			</a>

			<div id="a6">
				<a href="login.html">
				 <span>Đăng nhập</span>	
				</a>
			</div>

			<div id="a7">
				<a href="register.html">
					<span>Đăng kí</span>					
				</a>
			</div>

			<div id="a8">
				<a href="#">
					<span>Hỏi đáp</span>					
				</a>
			</div>
		</nav>

		<nav>
			<a href="test.html">
				<img src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/icon-phone-96x96-2.png">
				<span>Điện thoại</span>
			</a>

			<a href="#">
				<img src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/icon-laptop-96x96-1.png">
				<span>Laptop</span>
			</a>

			<a href="#">
				<img src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/icon-tablet-96x96-1.png">
				<span>Tablet</span>
			</a>

			<a href="#">
				<img src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/icon-phu-kien-96x96-1.png">
				<span>Phụ kiện</span>
				<i></i>
			</a>

			<a href="#">
				<img src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/icon-smartwatch-96x96-1.png">
				<span>Smartwatch</span>
			</a>

			<a href="#">
				<img src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/watch-icon-96x96.png">
				<span>Đồng hồ</span>
			</a>

			<a href="#">
				<img src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/icon-header-may-cu-30x30.png">
				<span>Máy cũ giá rẻ</span>
			</a>

			<a href="#">
				<img src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/icon-pc-96x96.png">
				<span>PC, Máy in</span>
				<i></i>
			</a>

			<a href="#">
				<span>Sim, Thẻ cào</span>
			</a>

			<a href="#">
				<span>Dịch vụ tiện ích</span>
				<i></i>
			</a>
		</nav>
	</header>`)}
    function updateSoLuongTrongGio() {
  let soLuongTrongGio = mang.length;

  // Lưu số lượng vào localStorage
  localStorage.setItem('soLuongTrongGio', soLuongTrongGio);

  // Lấy thẻ span để hiển thị số lượng
  let soLuongSpan = document.getElementById('soLuongTrongGio');

  // Cập nhật nội dung của thẻ span
  soLuongSpan.innerText = soLuongTrongGio > 0 ? soLuongTrongGio : '';
}


// Gọi hàm cập nhật số lượng khi trang web được tải
updateSoLuongTrongGio();

    function addFooter() {

        var link = document.createElement('link');

     // Đặt các thuộc tính cho thẻ <link>
     link.rel = 'stylesheet';
     link.type = 'text/css';
     link.href = 'css/footer.css'; // Thay đổi đường dẫn này thành đường dẫn thực tế đến tệp CSS của bạn
 
     // Thêm thẻ <link> vào phần <head> của tài liệu
     document.getElementsByTagName('head')[0].appendChild(link);

        document.write(`
        <footer>
        <div class="footer-column-right">
            <h3>Thông tin cá nhân</h3>
            <p>Môn học: javascript </p>
            <p>Tên: Lương Văn Phúc</p>
            
            <p>Trường:Cao đẳng fpt polytechnic</p>
            
        </div>
        <div class="footer-column">
            <h3>Liên hệ</h3>
           
			<p><i class="fab fa-facebook-square"></i> Facebook: phuclv272.50</p>
			<p><i class="fas fa-phone"></i> Số điện thoại: 0349226353</p>
			<p><i class="fas fa-envelope"></i> Email:phuclv272@gmail.com</p>
        </div>
    </footer>
        <!-- ============== Alert Box ============= -->
        <div id="alert">
            <span id="closebtn">&otimes;</span>
        </div>
    
        <!-- ============== Footer ============= -->
        <div class="copy-right">
            <p><a href="index.html">Foodyu</a> - All rights reserved © 2024 - Designed by
                <span style="color: #eee; font-weight: bold">FOODDU</span></p>
        </div>`);
    }
	
    function addDanhsachsp() {

        var link = document.createElement('link');

     // Đặt các thuộc tính cho thẻ <link>
     link.rel = 'stylesheet';
     link.type = 'text/css';
     link.href = 'css/sanpham.css'; // Thay đổi đường dẫn này thành đường dẫn thực tế đến tệp CSS của bạn
 
     // Thêm thẻ <link> vào phần <head> của tài liệu
     document.getElementsByTagName('head')[0].appendChild(link);

        document.write(`
		<div class="khung">
        <Span>SẢN PHẨM NỔI BẬT</Span>
        <div class="khung2">
            <!-- Thêm 10 thẻ .cell vào đây để tạo 10 ô -->
            <div class="cell"><a href="chitietsanpham.html"><product-card id="iphone15"></product-card></a></product-card> </div>
            <div class="cell"><product-card id="SamSung Galaxy J4+"></product-card> </div>
            <div class="cell"><product-card id="Xiaomi Mi 8 Lite"></product-card> </div>
            <div class="cell"><product-card id="Oppo F9"></product-card> </div>
            <div class="cell"><product-card id="Nokia 5.1 Plus"></product-card> </div>
            <div class="cell"><product-card id="Samsung Galaxy A8+ (2018)"></product-card> </div>
            <div class="cell"><product-card id="iPhone X 256GB Silver"></product-card> </div>
            <div class="cell"><product-card id="Oppo A3s 32GB"></product-card> </div>
        </div>
    </div>`);
    }
	function addDanhsachsp2() {

        var link = document.createElement('link');

     // Đặt các thuộc tính cho thẻ <link>
     link.rel = 'stylesheet';
     link.type = 'text/css';
     link.href = 'css/sanpham.css'; // Thay đổi đường dẫn này thành đường dẫn thực tế đến tệp CSS của bạn
 
     // Thêm thẻ <link> vào phần <head> của tài liệu
     document.getElementsByTagName('head')[0].appendChild(link);

        document.write(`
		<div class="khung">
        <Span>Gợi ý hôm nay</Span>
        <div class="khung2">
            <!-- Thêm 10 thẻ .cell vào đây để tạo 10 ô -->
            <div class="cell"><a href="chitietsanpham.html"><product-card id="iphone15"></product-card></a></product-card> </div>
            <div class="cell"><product-card id="SamSung Galaxy J4+"></product-card> </div>
            <div class="cell"><product-card id="Xiaomi Mi 8 Lite"></product-card> </div>
            <div class="cell"><product-card id="Oppo F9"></product-card> </div>
            <div class="cell"><product-card id="Nokia 5.1 Plus"></product-card> </div>
            <div class="cell"><product-card id="Samsung Galaxy A8+ (2018)"></product-card> </div>
            <div class="cell"><product-card id="iPhone X 256GB Silver"></product-card> </div>
            <div class="cell"><product-card id="Oppo A3s 32GB"></product-card> </div>
        </div>
    </div>`);
    }
	function addDanhsachsp3() {

        var link = document.createElement('link');

     // Đặt các thuộc tính cho thẻ <link>
     link.rel = 'stylesheet';
     link.type = 'text/css';
     link.href = 'css/sanpham.css'; // Thay đổi đường dẫn này thành đường dẫn thực tế đến tệp CSS của bạn
 
     // Thêm thẻ <link> vào phần <head> của tài liệu
     document.getElementsByTagName('head')[0].appendChild(link);

        document.write(`
		<div class="khung">
        <Span>TRẢ GÓP 0Đ </Span>
        <div class="khung2">
            <!-- Thêm 10 thẻ .cell vào đây để tạo 10 ô -->
            <div class="cell"><a href="chitietsanpham.html"><product-card id="iphone15"></product-card></a></product-card> </div>
            <div class="cell"><product-card id="SamSung Galaxy J4+"></product-card> </div>
            <div class="cell"><product-card id="Xiaomi Mi 8 Lite"></product-card> </div>
            <div class="cell"><product-card id="Oppo F9"></product-card> </div>
            <div class="cell"><product-card id="Nokia 5.1 Plus"></product-card> </div>
            <div class="cell"><product-card id="Samsung Galaxy A8+ (2018)"></product-card> </div>
            <div class="cell"><product-card id="iPhone X 256GB Silver"></product-card> </div>
            <div class="cell"><product-card id="Oppo A3s 32GB"></product-card> </div>
        </div>
    </div>`);
    }
	function addDanhsachsp4() {

        var link = document.createElement('link');

     // Đặt các thuộc tính cho thẻ <link>
     link.rel = 'stylesheet';
     link.type = 'text/css';
     link.href = 'css/sanpham.css'; // Thay đổi đường dẫn này thành đường dẫn thực tế đến tệp CSS của bạn
 
     // Thêm thẻ <link> vào phần <head> của tài liệu
     document.getElementsByTagName('head')[0].appendChild(link);

        document.write(`
		<div class="khung">
        <Span>GIẢM GIÁ SẬP SÀN</Span>
        <div class="khung2">
            <!-- Thêm 10 thẻ .cell vào đây để tạo 10 ô -->
            <div class="cell"><a href="chitietsanpham.html"><product-card id="iphone15"></product-card></a></product-card> </div>
            <div class="cell"><product-card id="SamSung Galaxy J4+"></product-card> </div>
            <div class="cell"><product-card id="Xiaomi Mi 8 Lite"></product-card> </div>
            <div class="cell"><product-card id="Oppo F9"></product-card> </div>
            <div class="cell"><product-card id="Nokia 5.1 Plus"></product-card> </div>
            <div class="cell"><product-card id="Samsung Galaxy A8+ (2018)"></product-card> </div>
            <div class="cell"><product-card id="iPhone X 256GB Silver"></product-card> </div>
            <div class="cell"><product-card id="Oppo A3s 32GB"></product-card> </div>
        </div>
    </div>`);
    }
	function addDanhsachsp4() {

        var link = document.createElement('link');

     // Đặt các thuộc tính cho thẻ <link>
     link.rel = 'stylesheet';
     link.type = 'text/css';
     link.href = 'css/sanpham.css'; // Thay đổi đường dẫn này thành đường dẫn thực tế đến tệp CSS của bạn
 
     // Thêm thẻ <link> vào phần <head> của tài liệu
     document.getElementsByTagName('head')[0].appendChild(link);

        document.write(`
		<div class="khung">
        <Span>SẢN PHẨM YÊU THÍCH NHẤT</Span>
        <div class="khung2">
            <!-- Thêm 10 thẻ .cell vào đây để tạo 10 ô -->
            <div class="cell"><a href="chitietsanpham.html"><product-card id="iphone15"></product-card></a></product-card> </div>
            <div class="cell"><product-card id="SamSung Galaxy J4+"></product-card> </div>
            <div class="cell"><product-card id="Xiaomi Mi 8 Lite"></product-card> </div>
            <div class="cell"><product-card id="Oppo F9"></product-card> </div>
            <div class="cell"><product-card id="Nokia 5.1 Plus"></product-card> </div>
            <div class="cell"><product-card id="Samsung Galaxy A8+ (2018)"></product-card> </div>
            <div class="cell"><product-card id="iPhone X 256GB Silver"></product-card> </div>
            <div class="cell"><product-card id="Oppo A3s 32GB"></product-card> </div>
        </div>
    </div>`);
    }
	
	
	function addbrand() {

		var link = document.createElement('link');
	
		// Đặt các thuộc tính cho thẻ <link>
		link.rel = 'stylesheet';
		link.type = 'text/css';
		link.href = 'css/addBrand.css'; // Thay đổi đường dẫn này thành đường dẫn thực tế đến tệp CSS của bạn
	
		// Thêm thẻ <link> vào phần <head> của tài liệu
		document.getElementsByTagName('head')[0].appendChild(link);
	
		document.write(`
		<div class="brand-bar">
    <button class="brand-button"><img src="img/company/Apple.jpg" alt="Apple"></button>
    <button class="brand-button"><img src="img/company/Samsung.jpg" alt="Samsung"></button>
    <button class="brand-button"><img src="img/company/Huawei.jpg" alt="Huawei"></button>
    <button class="brand-button"><img src="img/company/Xiaomi.png" alt="Xiaomi"></button>
	<button class="brand-button"><img src="img/company/Oppo.jpg" alt="Oppo"></button>
	<button class="brand-button"><img src="img/company/Itel.jpg" alt="Itel"></button>
	<button class="brand-button"><img src="img/company/HTC.jpg" alt="HTC"></button>
	<button class="brand-button"><img src="img/company/Vivo.jpg" alt="Vivo"></button>
	<button class="brand-button"><img src="img/company/Realme.png" alt="Realme"></button>
    <!-- Thêm nhiều nút khác nếu cần -->
</div>`);
	}
	
	