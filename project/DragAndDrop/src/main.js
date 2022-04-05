document.querySelectorAll(".drop-zone__input").forEach(inputElement => {
  const dropZoneElement = inputElement.closest(".drop-zone")
  const events =["dragleave", "dragend"]

  dropZoneElement.addEventListener("click", e => {
    inputElement.click()
  })

  inputElement.addEventListener("change", e => {
    if(inputElement.files.length) {
      updateThumbnail(dropZoneElement, inputElement.files[0])
    }
  })

  dropZoneElement.addEventListener("dragover", e => {
    e.preventDefault()
    dropZoneElement.classList.add("drop-zone--over")
  })

  events.forEach(type => {
    dropZoneElement.addEventListener(type, e => {
      dropZoneElement.classList.remove("drop-zone--over")
    })
  })

  dropZoneElement.addEventListener("drop", e => {
    e.preventDefault()

    if(e.dataTransfer.files.length) {
      inputElement.files = e.dataTransfer.files
      updateThumbnail(dropZoneElement, e.dataTransfer.files[0])
    }

    dropZoneElement.classList.remove("drop-zone--over")
  })
})

/*
  * Update the thumbnail on a drop zone element
  *
  * @param {HTMLElement} dropZoneElement
  * @param {File} file
*/
function updateThumbnail(dropZoneElement, file) {
  let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb")
  // first time - remove the prompt

  if(dropZoneElement.querySelector(".drop-zone__prompt")) {
    dropZoneElement.querySelector(".drop-zone__prompt").remove()
  }

  // first time - there is no thumbnail element
  if(!thumbnailElement){
    thumbnailElement = document.createElement("div")
    thumbnailElement.classList.add("drop-zone__thumb")
    dropZoneElement.appendChild(thumbnailElement)
  }

  thumbnailElement.dataset.label = file.name

  // show thumbnail for image file
  if(file.type.startsWith('image/')){
    const reader = new FileReader()

    reader.readAsDataURL(file)
    reader.onload = () => {
      thumbnailElement.style.backgroundImage = `url('${ reader.result }')`
    }
  }else {
    thumbnailElement.style.backgroundImage = null
  }
}