# Image Slider

A simple, responsive image slider/carousel built with vanilla HTML, CSS, and JavaScript. Slides auto-advance every 2 seconds and can also be navigated manually with arrow buttons or dot indicators.

## Features
- Auto-play slider (advances every 2 seconds)
- Previous / Next navigation buttons
- Clickable dot indicators that jump to a specific slide
- Smooth sliding transition using CSS `transform`
- Responsive container that scales down on smaller screens

## File Structure
```
image-slider/
├── index.html
├── style.css
├── slider.js
└── img/
    ├── 1.jpg
    ├── 2.jpg
    ├── 3.jpg
    ├── 4.jpg
    └── 5.jpg
```

## Tech Stack
- HTML5
- CSS3 
- JavaScript 

## How to Run
1. Clone or download this repository.
2. Place all 5 images inside an `img/` folder in the project root — that's the path `slider.js` expects (`./img/1.jpg`, etc.).
3. Open `index.html` directly in a browser. No build step or server needed.

## How It Works
- The `slides` array in `slider.js` stores the image paths.
- `buildSlides()` loops through the array and creates a `.slide` div (containing an `<img>`) for each entry, appending it to `#sliderTrack`.
- `buildDots()` creates one clickable dot per slide, with a click listener that jumps to that slide.
- `updateSlider()` shifts `#sliderTrack` horizontally with `translateX()` based on `currentIndex`, and toggles the `.active` class on the matching dot.
- `nextSlide()` / `prevSlide()` update `currentIndex` (wrapping around with the modulo operator) and call `updateSlider()`.
- `setInterval(nextSlide, 2000)` auto-advances the slider every 2 seconds; the prev/next buttons trigger the same functions manually.


## Author
Smit Prajapati
