

var mang = document.querySelectorAll('#item');
console.log('Mảng img là:', mang);

// ẩn tất cả img có index = 2 trở lên
for(var i = 2; i < mang.length; i++){
	Object.assign(mang[i].style, {
		display: 'none',
	})
}

var khoi_tao = 1;

// lấy ra phần tử div tiến lên
var btn_tien_len = document.querySelector('.btn-tien-len');


	btn_tien_len.onclick = function(PointerMouse) {
		console.log(PointerMouse.target);
		khoi_tao = khoi_tao + 1;
		if (khoi_tao == 2) {
			// nếu khởi tạo == 2 thì item 0 và item 1 bị ẩn
			Object.assign(mang[0].style, {
				display: 'none',
			})

			Object.assign(mang[1].style, {
				display: 'none',
			})

			// hiện phần tử có index = 2, index = 3
			Object.assign(mang[2].style, {
				display: 'block',
			})

			Object.assign(mang[3].style, {
				display: 'block',
			})
		}else if(khoi_tao == 3){
			// nếu khởi tạo == 3 thì item 2 và item 3 bị ẩn
			Object.assign(mang[2].style, {
				display: 'none',
			})

			Object.assign(mang[3].style, {
				display: 'none',
			})

			// hiện phần tử có index = 4, index = 5
			Object.assign(mang[4].style, {
				display: 'block',
			})

			Object.assign(mang[5].style, {
				display: 'block',
			})
		}else if(khoi_tao == 4){
			// nếu khởi tạo == 4 thì item 4 và item 5 bị ẩn
			Object.assign(mang[4].style, {
				display: 'none',
			})

			Object.assign(mang[5].style, {
				display: 'none',
			})

			// hiện phần tử có index = 6, index = 7
			Object.assign(mang[6].style, {
				display: 'block',
			})

			Object.assign(mang[7].style, {
				display: 'block',
			})
		}else if(khoi_tao >= 5){
			// nếu khởi tạo >= 5 thì item 6 và item 7 bị ẩn
			Object.assign(mang[6].style, {
				display: 'none',
			})

			Object.assign(mang[7].style, {
				display: 'none',
			})

			// hiện phần tử có index = 0, index = 1
			Object.assign(mang[0].style, {
				display: 'block',
			})

			Object.assign(mang[1].style, {
				display: 'block',
			})

			// gán khởi tạo về 1 để tiếp tục công việc auto;
			khoi_tao = 1;
		}
	}


setInterval(function() {
	khoi_tao = khoi_tao + 1;	
	if (khoi_tao == 2) {
			// nếu khởi tạo == 2 thì item 0 và item 1 bị ẩn
			Object.assign(mang[0].style, {
				display: 'none',
			})

			Object.assign(mang[1].style, {
				display: 'none',
			})

			// hiện phần tử có index = 2, index = 3
			Object.assign(mang[2].style, {
				display: 'block',
			})

			Object.assign(mang[3].style, {
				display: 'block',
			})
		}else if(khoi_tao == 3){
			// nếu khởi tạo == 3 thì item 2 và item 3 bị ẩn
			Object.assign(mang[2].style, {
				display: 'none',
			})

			Object.assign(mang[3].style, {
				display: 'none',
			})

			// hiện phần tử có index = 4, index = 5
			Object.assign(mang[4].style, {
				display: 'block',
			})

			Object.assign(mang[5].style, {
				display: 'block',
			})
		}else if(khoi_tao == 4){
			// nếu khởi tạo == 4 thì item 4 và item 5 bị ẩn
			Object.assign(mang[4].style, {
				display: 'none',
			})

			Object.assign(mang[5].style, {
				display: 'none',
			})

			// hiện phần tử có index = 6, index = 7
			Object.assign(mang[6].style, {
				display: 'block',
			})

			Object.assign(mang[7].style, {
				display: 'block',
			})
		}else if(khoi_tao >= 5){
			// nếu khởi tạo >= 5 thì item 6 và item 7 bị ẩn
			Object.assign(mang[6].style, {
				display: 'none',
			})

			Object.assign(mang[7].style, {
				display: 'none',
			})

			// hiện phần tử có index = 0, index = 1
			Object.assign(mang[0].style, {
				display: 'block',
			})

			Object.assign(mang[1].style, {
				display: 'block',
			})

			// gán khởi tạo về 1 để tiếp tục công việc auto;
			khoi_tao = 1;
		}
}, 2000);

// lấy ra phần tử div quay về
var btn_quay_ve = document.querySelector('.btn-quay-ve');

btn_quay_ve.onclick = function(PointerMouse) {
		khoi_tao = khoi_tao - 1;
		if (khoi_tao <= 0) {
			khoi_tao = 4;
			// nếu khởi tạo == 4 thì item 0 và item 1 bị ẩn
			Object.assign(mang[0].style, {
				display: 'none',
			})

			Object.assign(mang[1].style, {
				display: 'none',
			})

			// hiện phần tử có index = 6, index = 7
			Object.assign(mang[6].style, {
				display: 'block',
			})

			Object.assign(mang[7].style, {
				display: 'block',
			})
		}else if(khoi_tao == 3){
			// nếu khởi tạo == 3 thì item 6 và item 7 bị ẩn
			Object.assign(mang[6].style, {
				display: 'none',
			})

			Object.assign(mang[7].style, {
				display: 'none',
			})

			// hiện phần tử có index = 4, index = 5
			Object.assign(mang[4].style, {
				display: 'block',
			})

			Object.assign(mang[5].style, {
				display: 'block',
			})
		}else if(khoi_tao == 2){
			// nếu khởi tạo == 4 thì item 4 và item 5 bị ẩn
			Object.assign(mang[4].style, {
				display: 'none',
			})

			Object.assign(mang[5].style, {
				display: 'none',
			})

			// hiện phần tử có index = 2, index = 3
			Object.assign(mang[2].style, {
				display: 'block',
			})

			Object.assign(mang[3].style, {
				display: 'block',
			})
		}else if(khoi_tao == 1){
			// nếu khởi tạo == 1 thì item 2 và item 3 bị ẩn
			Object.assign(mang[2].style, {
				display: 'none',
			})

			Object.assign(mang[3].style, {
				display: 'none',
			})

			// hiện phần tử có index = 0, index = 1
			Object.assign(mang[0].style, {
				display: 'block',
			})

			Object.assign(mang[1].style, {
				display: 'block',
			})
		}
	}