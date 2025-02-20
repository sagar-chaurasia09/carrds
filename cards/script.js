const slides = document.querySelectorAll('.slideshow img');
        let currentIndex = 0;

function showNextSlide() {
    const previousIndex = currentIndex;
    currentIndex = (currentIndex + 1) % slides.length;

    slides[previousIndex].classList.remove('active');
    slides[previousIndex].classList.add('previous');
    slides[currentIndex].classList.add('active');

    setTimeout(() => {
    slides[previousIndex].classList.remove('previous');
    }, 1000); // Keep the previous slide for smooth transition
}

setInterval(showNextSlide, 1000); // Change slide every 3 seconds