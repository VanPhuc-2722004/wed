function DongVat(ten, tuoi, mau, giong) {
    this.ten = ten;
    this.tuoi = tuoi;
    this.mau = mau;
    this.giong = giong;
    this.keu = function() {
        return "Gau gau";
    }
}

let thuocTinh = [];

function luuThuocTinh() {
    let ten = document.getElementById('ten').value;
    let tuoi = document.getElementById('tuoi').value;
    let mau = document.getElementById('mau').value;
    let giong = document.getElementById('giong').value;
    let dongVat = new DongVat(ten, tuoi, mau, giong);
    thuocTinh.push(dongVat);
    document.getElementById('ten').value = '';
    document.getElementById('tuoi').value = '';
    document.getElementById('mau').value = '';
    document.getElementById('giong').value = '';
}

function xuatThuocTinh() {
    let danhSachThuocTinh = document.getElementById('danhSachThuocTinh');
    danhSachThuocTinh.innerHTML = '';
    for (let i = 0; i < thuocTinh.length; i++) {
        danhSachThuocTinh.innerHTML += '<li>Tên: ' + thuocTinh[i].ten + ', Tuổi: ' + thuocTinh[i].tuoi + ', Màu: ' + thuocTinh[i].mau + ', Giống: ' + thuocTinh[i].giong + ', Tiếng kêu: ' + thuocTinh[i].keu() + '</li>';
    }
}
