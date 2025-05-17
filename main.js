const images = document.querySelectorAll('.park-image');
const prevButton = document.querySelector("#prev-button");
const nextButton = document.querySelector("#next-button")

let currentIndex = 0;

function showImage(index) {
    images.forEach((img, i) =>{
        img.classList.toggle('active', i === index);
    })
}

prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
})

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex)
})

showImage(currentIndex); // intializing the first image to be shown