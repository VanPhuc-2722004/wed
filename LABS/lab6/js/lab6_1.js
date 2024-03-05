// chapter6.js
window.onload = function() {
    const titles = document.querySelectorAll(".title");
    const texts = document.querySelectorAll(".myText");

    titles.forEach((title) => {
        title.addEventListener("click", () => {
            // Remove active class from all texts
            texts.forEach((text) => {
                text.classList.remove("active");
            });

            // Add active class to the next sibling (text) of the clicked title
            title.nextElementSibling.classList.add("active");
        });
    });
};
