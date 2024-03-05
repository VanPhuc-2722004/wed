let inventory = [];

let item1 = {name: 'iphone15', model: 'Model 1', cost: 100, quantity: 10};
let item2 = {name: 'phone11', model: 'Model 2', cost: 200, quantity: 20};
let item3 = {name: 'nokia', model: 'Model 3', cost: 300, quantity: 30};

inventory.push(item1, item2, item3);

function xuatSanPham() {
    let danhSachSanPham = document.getElementById('danhSachSanPham');
    danhSachSanPham.innerHTML = '';
    for (let i = 0; i < inventory.length; i++) {
        danhSachSanPham.innerHTML += '<li>Tên: ' + inventory[i].name + ', Model: ' + inventory[i].model + ', Giá: ' + inventory[i].cost + ', Số lượng: ' + inventory[i].quantity + '</li>';
    }
}
