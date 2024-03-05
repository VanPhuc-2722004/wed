document.addEventListener('DOMContentLoaded', (event) => {
    var unameInput = document.getElementById("uname");
    var pswInput = document.getElementById("psw");

    var unameError = document.getElementById("uname-error");
    var pswError = document.getElementById("psw-error");

    unameInput.addEventListener('input', function() {
        var value = this.value;
        if (!isValidEmailOrPhone(value) && value.trim() !== '') {
            showErrorMessage(unameError, 'Email hoặc số điện thoại không hợp lệ.');
        } else {
            hideErrorMessage(unameError);
        }
    });

    pswInput.addEventListener('input', function() {
        var value = this.value;
        if (!isValidPassword(value) && value.trim() !== '') {
            showErrorMessage(pswError, 'Mật khẩu phải có ít nhất 8 ký tự, bao gồm cả chữ và số.');
        } else {
            hideErrorMessage(pswError);
        }
    });

    document.querySelector('.btn').addEventListener('click', function(event) {
        event.preventDefault();

        var uname = document.querySelector('input[name="uname"]').value;
        var psw = document.querySelector('input[name="psw"]').value;

        var modal = document.getElementById("myModal");
        var span = document.getElementsByClassName("close")[0];
        var modalText = document.getElementById("modalText");

        span.onclick = function() {
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

        if (!uname || !psw) {
            modalText.innerHTML = 'Vui lòng không để trống bất kỳ trường nào.';
            modal.style.display = "block";
        } else {
            // Kiểm tra tính hợp lệ của email hoặc số điện thoại
            var emailPhoneRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            if (!emailPhoneRegex.test(uname)) {
                modalText.innerHTML = 'Email hoặc số điện thoại không hợp lệ.';
                modal.style.display = "block";
                return;
            }

            // Kiểm tra mật khẩu có ít nhất 8 ký tự, bao gồm cả chữ và số
            var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
            if (!passwordRegex.test(psw)) {
                modalText.innerHTML = 'Mật khẩu phải có ít nhất 8 ký tự, bao gồm cả chữ và số.';
                modal.style.display = "block";
                return;
            }

            // Tiếp tục xử lý đăng nhập
        }
    });

    function isValidEmailOrPhone(inputValue) {
        var emailPhoneRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return emailPhoneRegex.test(inputValue);
    }

    function isValidPassword(inputValue) {
        var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return passwordRegex.test(inputValue);
    }

    function showErrorMessage(element, message) {
        element.textContent = message;
        element.style.display = 'block';
    }

    function hideErrorMessage(element) {
        element.textContent = '';
        element.style.display = 'none';
    }
});
