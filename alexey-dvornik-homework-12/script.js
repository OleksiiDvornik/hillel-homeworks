function slideShow() {
    let index = 0;
    const prevButton = document.querySelector('.js--prev');
    const nextButton = document.querySelector('.js--next');
    prevButton.addEventListener('click', function () {changeSlide(this);});
    nextButton.addEventListener('click', function () {changeSlide(this);});

    function changeSlide(element) {
        let slides = document.querySelectorAll(".slider__list-item");
        if (element.dataset.type === 'next') {
            index++;
            if (index > slides.length - 1) {
                index = slides.length - 1;
            }
        }
        if (element.dataset.type === 'prev') {
            index--;
            if (index < 0) {
                index = 0;
            }
        }
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove("active");
            if (i === index) {
                slides[i].classList.add("active");
            }
        }
    }
}

slideShow();