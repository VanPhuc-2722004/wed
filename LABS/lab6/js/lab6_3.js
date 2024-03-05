let img_hover = document.querySelector('.hover_image img');
let img_slider = document.querySelector('.wrapper_slider img');
let load_image = new Image();
let link_img ="imgs/avat2.jpg";
let btn_first = document.querySelectorAll('button');
img_hover.addEventListener('mouseenter', () => {
img_hover.setAttribute('src', link_img);
});
img_hover.addEventListener('mouseleave', () => {
    img_hover.setAttribute('src', "imgs/avat1.jpg");
});
function loadImage() {
    load_image.src = link_img;
    arrayImage.forEach((element) => {
        let load_image = new Image();
        load_image.src = element;
    });
}

//mảng album ảnh
let arrayImage = [
"imgs/avat2.jpg",
"imgs/avat1.jpg",
"imgs/avat2.jpg",
"imgs/avat1.jpg",
"imgs/avat1.jpg",
];
let currentIndex = -1;
btn_first.forEach((element) => {
    element.addEventListener('click', () => {
        let text = element.innerText;
        switch (text) {
            case 'first':
                currentIndex = 0;
                img_slider.setAttribute('src', arrayImage[currentIndex]);
                break;
            case 'prev':
                if (currentIndex > 0) {
                    currentIndex--;
img_slider.setAttribute('src', arrayImage[currentIndex]);
                }
                break;
            case 'next':
                if (currentIndex < arrayImage.length - 1) {
                    currentIndex++;
                    img_slider.setAttribute('src', arrayImage[currentIndex]);
                }
                break;
            case 'last':
                currentIndex = arrayImage.length - 1;
                console.log(currentIndex);
                img_slider.setAttribute('src', arrayImage[currentIndex]);
                break;
            default:
                break;
}
});
});
