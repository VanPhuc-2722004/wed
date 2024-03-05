document.addEventListener('DOMContentLoaded', (event) => {
    function display() {
        var pro = document.getElementById("pro");
        var qty = document.getElementById("qty");
    
        // Kiểm tra xem số lượng có âm không
        if (qty.value < 0) {
            alert("Số lượng không thể âm");
            return;
        }
    
        var name = pro.innerText;
        var price = pro.getAttribute("data-price");
        var quantity = qty.value;
        var amount = price * quantity;
    
        document.getElementById("name").innerText = name;
        document.getElementById("amount").innerText = amount;
    }

    var okButton = document.querySelector(".ok");
    if (okButton) {
        okButton.addEventListener("click", display);
    }
});
