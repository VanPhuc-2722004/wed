// Lấy thẻ HTML lớp là element
const output = document.querySelector('#output');
const message = document.querySelector('.message');
const box = document.querySelector('.box');

let startTime; // Variable to store the start time

// Thay đổi message sau khi, trò chơi game bắt đầu từ vòng lặp
message.textContent = "Press to Start";

// Tạo ra ngẫu nhiên
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Load từ vòng lặp mới, thay đổi gian điểm xuất hiện của box.
function reset() {
    message.textContent = "Click it!";
    box.style.display = 'block';
    box.style.top = random(0, 75) + '%';
    box.style.left = random(0, 75) + '%';
    startTime = Date.now(); // Record the start time
}

// Sự kiện click chuột trên hình vuông khi hiển thị thông báo
box.addEventListener('click', () => {
    const endTime = Date.now(); // Record the end time
    const duration = endTime - startTime; // Calculate the duration in milliseconds

    message.textContent = `Clicked in ${duration} ms. Press to Start Again.`;
    setTimeout(() => { reset() }, random(1000, 2000));
});

// Initial box creation
reset();
