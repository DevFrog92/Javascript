const slider = document.querySelector(".slider-container")
const slides = Array.from(document.querySelectorAll(".slide"))

let isDragging = false,
  startPosition = 0,
  currentTranslate = 0,
  prevTranslate = 0,
  animationID = 0,
  currentIndex = 0

slides.forEach((slide, index) => {
  const slideImage = slide.querySelector("img")
  // prevent drag img
  slideImage.addEventListener("dragstart", (e) => e.preventDefault())

  // touch event
  slide.addEventListener("touchstart", touchStart(index), {passive: true})
  slide.addEventListener("touchend", touchEnd, {passive: true})
  slide.addEventListener("touchmove", touchMove, {passive: true})


  // mouse event
  slide.addEventListener("mousedown", touchStart(index), {passive: true})
  slide.addEventListener("mouseup", touchEnd, {passive: true})
  slide.addEventListener("mouseleave", touchEnd, {passive: true})
  slide.addEventListener("mousemove", touchMove, {passive: true})

})

// disable context menu
window.oncontextmenu = function(e) {
  e.preventDefault()
  e.stopPropagation()
  return false
}

function touchStart(index) {
  return function(event) {
    currentIndex = index
    startPosition = getPositionX(event)
    console.log('touch start', startPosition)
    isDragging = true

    animationID = requestAnimationFrame(animation)
    slider.classList.add("grabbing")
  }
}

function touchEnd() {
  isDragging = false
  cancelAnimationFrame(animationID)

  const movedBy = currentTranslate - prevTranslate

  if(movedBy < -100 && currentIndex < slides.length - 1) {
    currentIndex += 1
  }

  if(movedBy > 100 && currentIndex > 0) {
    currentIndex -= 1
  }

  setPositionByIndex()

  slider.classList.remove("grabbing")
}

function touchMove(event) {
  if(isDragging) {
    const currentPosition = getPositionX(event)

    currentTranslate = prevTranslate + currentPosition - startPosition
    console.log('currentTranslate',prevTranslate, currentPosition, startPosition, "=", currentTranslate)
  }
}

function getPositionX(event) {
  return event.type.includes('mouse') ? event.clientX :
  event.touches[0].clientX
}

function animation() {
  setSliderPosition()
  if(isDragging) {
    requestAnimationFrame(animation)
  }
}

function setSliderPosition() {
  slider.style.transform = `translateX(${currentTranslate}px)`
}

function setPositionByIndex() {
  currentTranslate = currentIndex * -window.innerWidth
  prevTranslate = currentTranslate
  console.log("setPositionByIndex", currentTranslate, prevTranslate)
  setSliderPosition()
}