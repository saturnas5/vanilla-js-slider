const slider = document.querySelector('.slider-wrapper');
const slide = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('btn-prev');
const nextBtn = document.getElementById('btn-next');
const dots = document.querySelectorAll('.dot');
let sliderInterval = setInterval(handleSlidesAutoChange, 4000)
let called = false;


// Sets random slide active on first load \/ //
function handleRandomActiveSlide() {
    let randomNum = Math.floor(Math.random()* slide.length);
    
    slide[randomNum].classList.add('active');
    dots[randomNum].classList.add('active');
}

if(!called) {
    handleRandomActiveSlide();
    called = true
}
// Sets random slide active on first load /\ //

function handleSlideChange(e) {
    let currentIndex = null;
    
    if (e.target.id === 'btn-next') {

        slide.forEach((item, index) => {
            if(item.classList.contains('active')) {
                currentIndex = index;
            };
        });

        slide[(currentIndex + 1) % slide.length].classList.add('active');
        dots[(currentIndex + 1) % dots.length].classList.add('active');
        slide[currentIndex].classList.remove('active');
        dots[currentIndex].classList.remove('active');
    
    } else if (e.target.id === 'btn-prev') {

        slide.forEach((item, index) => {
            if(item.classList.contains('active')) {
                currentIndex = index;
            };
        });

        if(currentIndex > 0) {
            slide[currentIndex - 1].classList.add('active');
            dots[currentIndex - 1].classList.add('active');
            slide[currentIndex].classList.remove('active');
            dots[currentIndex].classList.remove('active');
        };

        if(currentIndex === 0) {
            slide[slide.length -1].classList.add('active');
            dots[dots.length -1].classList.add('active');
            slide[currentIndex].classList.remove('active');
            dots[currentIndex].classList.remove('active');
        };
    };
};

function handleSlidesAutoChange() {
    let currentIndex = null;
    slide.forEach((item, index) => {
        if(item.classList.contains('active')) {
            currentIndex = index;
        }
    });

    slide[(currentIndex + 1) % slide.length].classList.add('active');
    dots[(currentIndex + 1) % dots.length].classList.add('active');
    slide[currentIndex].classList.remove('active')
    dots[currentIndex].classList.remove('active')
}

function handleSlideChangeWithDots(index) {
    slide.forEach(item => item.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slide[index].classList.add('active');
    dots[index].classList.add('active');
};


// Removes interval on hover
slider.addEventListener('mouseenter', () => {
    clearInterval(sliderInterval)
})

// Returns interval when not hovered
slider.addEventListener('mouseleave', () => {
    sliderInterval = setInterval(handleSlidesAutoChange, 4000)
})

// controls slide chnage on click
nextBtn.addEventListener('click', e => handleSlideChange(e));
prevBtn.addEventListener('click', e => handleSlideChange(e));

// controls slide chnage on click
dots.forEach((dot, index) => {
    dot.addEventListener('click', e => handleSlideChangeWithDots(index))
})
