'use strict'

export const animateSlider = () => {

    const sliderContainer = document.querySelector('.slider-container')
    const slideRight = document.querySelector('.right-slide')
    const slideLeft = document.querySelector('.left-slide')
    const upButton = document.querySelector('.up-button')
    const downButton = document.querySelector('.down-button')
    const slidesLength = slideRight.querySelectorAll('div').length

    let activeSlideIndex = 0
    let changeSlideTimeout;

    upButton.addEventListener('click', () => changeSlide('up'))
    downButton.addEventListener('click', () => changeSlide('down'))


    const changeSlide = (direction) => {

        const sliderHeight = sliderContainer.clientHeight
        const sliderWidth = sliderContainer.clientWidth

        clearTimeout(changeSlideTimeout);

        if (direction === 'up') {
            activeSlideIndex++
            if (activeSlideIndex > slidesLength - 1) {
                activeSlideIndex = 0

            }
        }

        else if (direction === 'down') {
            activeSlideIndex--
            if (activeSlideIndex < 0) {
                activeSlideIndex = slidesLength - 1
            }
        }

        if (window.innerWidth > 900) {
            slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
            slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
        }
        if (window.innerWidth <= 900) {
            slideRight.style.transform = `translateX(-${activeSlideIndex * sliderWidth}px)`
            slideLeft.style.transform = `translateX(${activeSlideIndex * sliderWidth}px)`
        }

        changeSlideTimeout = setTimeout(() => {
            changeSlide(direction);
        }, 4000);
    }

    changeSlide("up")
}

