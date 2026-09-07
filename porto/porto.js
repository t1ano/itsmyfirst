document.querySelectorAll('.slider').forEach(slider => {
    let slideIndex = 0;
    const slides = slider.querySelectorAll('img');
    const dotsContainer = slider.querySelector('.slider-dots');

    //buat image
    slides.forEach((image,index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if(index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => { 
            slideIndex = index;
            showSlides();
        });
        dotsContainer.appendChild(dot);
    });
    const dots = dotsContainer.querySelectorAll("span");
    function showSlides(n) {
        slides.forEach(slide => {
            slide.classList.remove ("active");
        });
        dots.forEach(dot => dot.classList.remove("active"));

        slides[slideIndex].classList.add("active");
        dots[slideIndex].classList.add("active");
    }

    slider.plusSlides = function(direction) {
        slideIndex += direction;
        if (slideIndex >= slides.length) slideIndex = 0;
        if (slideIndex < 0) slideIndex = slides.length - 1;
        showSlides();
    };
});
function plusSlides(button,direction) {
    const slider= button.closest(".slider");
    slider.plusSlides(direction)
}
