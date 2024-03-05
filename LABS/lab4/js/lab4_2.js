function SinhVien(hoTen, diem) {
    this.hoTen = hoTen;
    this.diem = diem;
    this.hienThi = function() {
        let hocLuc = this.diem >= 5 ? 'Đậu' : 'Rớt';
        document.write("<h3>Họ và tên: " + this.hoTen + "</h3>");
        document.write("<h3>Điểm TB: " + this.diem + "</h3>");
        document.write("<h3>Học lực: " + hocLuc + "</h3>");
    }
}

function hienThi() {
    let hoTen = document.getElementById('hoTen').value;
    let diem = document.getElementById('diem').value;
    let sv = new SinhVien(hoTen, diem);
    sv.hienThi();
}