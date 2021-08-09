const carouselSlide = document.querySelector(".carousel_slide")
const items = document.querySelectorAll(".guide_item_content")
const prevBtn = document.querySelector(".prev_btn")
const nextBtn = document.querySelector(".next_btn")
const colorCode = ["eaa18a", "f55354", "f59b25", "7fc638", "754100", "eaa18a", "f55354"]
const itemWidth = 784
const slideSpeed = 350
let counter = 1
const setTransform = () => {
  carouselSlide.style.transform = `translateX(${-itemWidth * counter}px)`
}
const setTransition = (setState) => {
  if (setState) {
    carouselSlide.style.transition = `transform .${slideSpeed}s ease-in-out`
  }
  else {
    carouselSlide.style.transition = "none"
  }
}

// TODO: change color to game guide image
items.forEach((e, i)=>{
  e.style.backgroundColor = `#${colorCode[i]}`
})

carouselSlide.style.width = `${itemWidth * items.length}px`
setTransform()

nextBtn.addEventListener("click", () => {
  if (counter >= items.length - 1) {return}
  setTransition(true)
  counter += 1
  setTransform()
})
prevBtn.addEventListener("click", () => {
  if (counter <= 0) {return}
  setTransition(true)
  counter -= 1
  setTransform()
})
carouselSlide.addEventListener("transitionend", () => {
  if (items[counter].id === "copy_last") {
    setTransition(false)
    counter = items.length - 2
    setTransform()
  }
  if (items[counter].id === "copy_first") {
    setTransition(false)
    counter = items.length - counter
    setTransform()
  }
})