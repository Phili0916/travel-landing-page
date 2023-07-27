const menuBtn = document.querySelector(".menu-btn")
const navigationBtn = document.querySelector(".navigation")
const sliderBtns = document.querySelectorAll(".slider-btn")
const slides = document.querySelectorAll(".video-slide")
const contents = document.querySelectorAll(".content")


menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active")
    navigationBtn.classList.toggle("active")
})

/*video slider*/
const sliderBtnNavigation = function(manual) {
    sliderBtns.forEach((sliderBtn) => {
        sliderBtn.classList.remove("active")
    })
    slides.forEach((slide) => {
        slide.classList.remove("active")
    })
    contents.forEach((content) => {
        content.classList.remove("active")
    })
    sliderBtns[manual].classList.add("active")
    slides[manual].classList.add("active")
    contents[manual].classList.add("active")
}

sliderBtns.forEach((sliderBtn, i) => {
    sliderBtn.addEventListener("click", () => {
        console.log("click")
        sliderBtnNavigation(i)
    })
})