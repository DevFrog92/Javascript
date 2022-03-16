const backgroundObject = {
  backgroundElem: document.querySelector("body")
}

function getUnsplashKey() {
  const CLIENT_KEY = "VJjWn9mh-obXwt2PKiOTY-TjrsCA3yjS-xhS4fxGi4s";

  return (function () {
    return CLIENT_KEY
  }());
}

function loadBackgroundImage() {
  console.log("loadIm")
  const UNSPLASH_API_KEY = getUnsplashKey();
  const UNSPLASH_URL = `https://api.unsplash.com/photos/random/?client_id=${UNSPLASH_API_KEY}&query=landscape&orientation=landscape`;

  getBackgroundImage(UNSPLASH_URL);
  console.log(UNSPLASH_URL);
}

function setBackgroundImage(imageInfo) {
  backgroundObject.backgroundElem.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)), url(${
    imageInfo.url
  })`;
}

function saveBackground() {

}

// async function getBackgroundImage(URL) {
//   try {
//     const response = await fetch(URL);
//     const data = await response.json();
//     if (data.urls && data.urls.full && data.location.city) {
//       const imageInfo = {
//         url: data.urls.full,
//         location: data.location,
//         city: data.location.city,
//         country: data.location.country,
//         name: data.location.name
//       }

//       console.log(imageInfo);
//       // setBackgroundImage(imageInfo)
//       return
//     }

//     // getBackgroundImage(URL);
//   } catch (error) {
//     // alert('Fail to load background image');
//   }
// }

function getBackgroundImage(URL) {
  const imageInfo = {
    url: "https://images.unsplash.com/photo-1498550744921-75f79806b8a7?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMDg2MTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDY4MTU5MjY&ixlib=rb-1.2.1&q=85",
    location: { city: "seoul"},
    city: 'seoul',
    country: "korea",
    name: 'yong'
  }

  setBackgroundImage(imageInfo)
}

function initBackground() {
  loadBackgroundImage();
  return
}

initBackground();