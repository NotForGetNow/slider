const sliderPrev = document.querySelector('.slider-prev');
const sliderNext = document.querySelector('.slider-next');
const sliderLine = document.querySelector('.slider-line'); 

let pos = 0;

function movePos(position) {
    if(pos <= 0) {
        
    }

    sliderLine.style.transform = `translateX(${position}px)`;
}

sliderPrev.addEventListener('click', function() {
    pos += 256;
    movePos(pos);
});

sliderNext.addEventListener('click', function() {
    pos -= 256;
    movePos(pos);
});
