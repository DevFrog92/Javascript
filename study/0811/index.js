const slides = document.querySelector('.slides')
const slide = document.querySelectorAll('.slide')
let currentIndex = 0
const slideLength = slide.length
const slideWidth = 200
const slideMargin = 30
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const updateWidth = () => {
  let currentSlides = document.querySelectorAll('.slide')
  let newSlideCount = currentSlides.length

  let newWidth = (slideWidth+slideMargin)*newSlideCount - slideMargin + 'px'
  slides.style.width = newWidth
}

const setInitialPosition = () => {
  const initialTranslateValue = -(slideWidth+slideMargin)*slideLength
  slides.style.transform = `translateX(${initialTranslateValue}px)`
}

const makeClone = () => {
  for(let i = 0 ; i<slideLength;i++){
    // a.cloneNode(), a.cloneNode(true)
    const cloneSlide = slide[i].cloneNode(true)
    cloneSlide.classList.add('clone')
    slides.appendChild(cloneSlide)
  }
  for(let i = slideLength-1; i>=0;i--){
    const cloneSlide = slide[i].cloneNode(true)
    cloneSlide.classList.add('clone')
    slides.prepend(cloneSlide)
  }
  updateWidth()
  setInitialPosition()
  setTimeout(()=>{
    slides.classList.add('animated')
  },100)
}

makeClone()

const moveSlide = (num)=>{
   slides.style.left = -num * (slideWidth + slideMargin) + 'px'
   currentIndex = num
   if(currentIndex === slideLength || currentIndex === -slideLength){
     setTimeout(()=>{
       slides.classList.remove('animated')
       slides.style.left = 0+'px'
       currentIndex = 0
     },500)
     setTimeout(()=>{
      slides.classList.add('animated')

     },600)
   }
}



const nextHandler = () => {
  moveSlide(currentIndex + 1)
}
const prevHandler = () => {
  moveSlide(currentIndex - 1)
}
next.addEventListener('click',nextHandler)
prev.addEventListener('click',prevHandler)