function slideShow() {
    let index = 0;
    let timeoutID;
    let slides = document.querySelectorAll(".slider__list-item");
    const prevButton = document.querySelector('.js--prev');
    const nextButton = document.querySelector('.js--next');
    prevButton.addEventListener('click', changeSlide);
    nextButton.addEventListener('click', changeSlide);
    function changeSlide(event) {
        const element = event.target;
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
        clearInterval(timeoutID);
        autoplay();
    }
    function autoplay() {
        timeoutID = setInterval(()=> {
            index++;
            if (index > slides.length - 1) {
                clearInterval(timeoutID);
                index = slides.length - 1;
            }
            for (let i = 0; i < slides.length; i++) {
                slides[i].classList.remove("active");
                if (i === index) {
                    slides[i].classList.add("active");
                }
            }
        }, 5000)
    }
    autoplay()
}
slideShow();
