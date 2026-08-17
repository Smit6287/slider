"use strict";
const slides = [
    {
        image: "./img/1.jpg", 
    },
    {
        image: "./img/2.jpg",
    },
    {
        image: "./img/3.jpg",
    },
    {
        image: "./img/4.jpg",
    },
    {
        image: "./img/5.jpg",   
    }
];
let currentIndex = 0;
const track = document.getElementById("sliderTrack");
const dotsContainer = document.getElementById("dotsContainer");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function buildSlides() {
    slides.forEach(function (slide) {
        const slideDiv = document.createElement("div");
        slideDiv.className = "slide";
        slideDiv.innerHTML =
            '<img src="' + slide.image + '" alt="Slide Image">' +
                '<div class="caption">' +
                "<h2>" +  "</h2>" 
                "</div>";
        track.appendChild(slideDiv);
    });
}

function buildDots() {
    slides.forEach(function (slide, index) {
        const dot = document.createElement("span");
        dot.className = "dot";
        if (index === 0) {
            dot.classList.add("active");
        }
        dot.addEventListener("click", () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
}
function updateSlider() {
    const offset = -currentIndex * 100;
    track.style.transform = "translateX(" + offset + "%)";
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add("active");
        }
        else {
            dot.classList.remove("active");
        }
    });
    console.log("Current slide index: " + currentIndex);
}
function goToSlide(index) {
    currentIndex = index;
    updateSlider();
}
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
}
function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
}
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);
setInterval(nextSlide, 2000);
buildSlides();
buildDots();
updateSlider();
