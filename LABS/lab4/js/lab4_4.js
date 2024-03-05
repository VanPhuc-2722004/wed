let cuaSoMoi;

function moCuaSoMoi() {
    cuaSoMoi = window.open("", "", "width=200,height=100");
}

function dongCuaSoMoi() {
    if (cuaSoMoi) {
        cuaSoMoi.close();
    }
}

function kiemTraCuaSoMoi() {
    if (cuaSoMoi && !cuaSoMoi.closed) {
        alert("Cửa sổ mới vẫn đang mở.");
    } else {
        alert("Cửa sổ mới đã được đóng.");
    }
}