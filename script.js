const menuBtn = document.querySelector(".menu-btn")
const navigationBtn = document.querySelector(".navigation")
const sliderBtns = document.querySelectorAll(".slider-btn")

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active")
    navigationBtn.classList.toggle("active")
})

/*video slider*/
const sliderBtnNavigation = function(manual) {
    sliderBtns.forEach((sliderBtn) => {
        sliderBtn.classList.remove("active")
    })
    sliderBtns[manual].classList.add("active")
}

sliderBtns.forEach((sliderBtn, i) => {
    sliderBtn.addEventListener("click", () => {
        console.log("click")
        sliderBtnNavigation(i)
    })
})