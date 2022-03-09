function getUnsplashKey() {
  const CLIENT_KEY = "VJjWn9mh-obXwt2PKiOTY-TjrsCA3yjS-xhS4fxGi4s";

  return (function () {
    return CLIENT_KEY
  }());
}

function loadBackgroundImage() {
  const UNSPLASH_API_KEY = getUnsplashKey();
  const UNSPLASH_URL = `https://api.unsplash.com/photos/random/?client_id=${UNSPLASH_API_KEY}&query=landscape&orientation=landscape`;

  getBackgroundImage(UNSPLASH_URL);
  console.log(UNSPLASH_URL);
}

async function getBackgroundImage(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    if (data.urls && data.urls.full && data.location.city) {
      const imageInfo = {
        url: data.urls.full,
        location: data.location,
        city: data.location.city,
        country: data.location.country,
        name: data.location.name
      }

      console.log(imageInfo);
      return
    }

    getBackgroundImage(URL);
  } catch (error) {
    alert('Fail to load background image');
  }
}

function initBackground() {
  loadBackgroundImage();
  return
}

initBackground();