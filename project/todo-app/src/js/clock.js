function getTime(clock) {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const time = `${hour < 10 ? `0${hour}` : hour}:${minute < 10 ? `0${minute}` : minute}`;

  clock.innerText = time;
  return
}

function initClock() {
  const clock = document.querySelector(".clock-text");

  getTime(clock);
  setInterval(() => {
    getTime(clock);
  }, 6000);
  return
}

initClock();