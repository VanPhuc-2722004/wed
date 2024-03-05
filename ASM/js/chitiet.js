window.addEventListener('DOMContentLoaded', (event) => {
    let slider = document.querySelector('.image-slider');
    let images = Array.from(slider.querySelectorAll('.slider-image'));
    let currentIndex = 0;

    function goToImage(index) {
        if (index < 0) {
            index = images.length - 1;
        } else if (index >= images.length) {
            index = 0;
        }
        slider.scroll({
            left: images[index].offsetLeft,
            behavior: 'smooth'
        });
        currentIndex = index;
    }

    let prevButton = document.querySelector('.slider-button-prev');
    let nextButton = document.querySelector('.slider-button-next');

    prevButton.addEventListener('click', () => {
        goToImage(currentIndex - 1);
    });

    nextButton.addEventListener('click', () => {
        goToImage(currentIndex + 1);
    });
});
//them dữ liệu vào local khi nhấn nút thêm giỏ hàng
//thành công
    //alert("thêm thành công"); 
  