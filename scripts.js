document.querySelectorAll(".slideshow-container").forEach((slideshow) => {
    const slides = slideshow.querySelectorAll(".slides");
    const thumbnails = slideshow.querySelectorAll(".slideshow-thumbnails img");
    const prevButton = slideshow.querySelector(".prev-slide");
    const nextButton = slideshow.querySelector(".next-slide");
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
            thumbnails[i].classList.toggle("active", i === index);
        });
        currentSlide = index;
    }

    function changeSlide(offset) {
        const newIndex = (currentSlide + offset + slides.length) % slides.length;
        showSlide(newIndex);
    }

    // Thumbnail click event
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener("click", () => {
            showSlide(index);
        });
    });

    // Button click events
    prevButton.addEventListener("click", () => {
        changeSlide(-1);
    });

    nextButton.addEventListener("click", () => {
        changeSlide(1);
    });

    // Initialize the first slide
    showSlide(0);
});
