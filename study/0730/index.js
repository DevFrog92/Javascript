const balloon = document.getElementById("balloon");

document.addEventListener("click", (e) => {
  console.log(e.target)
  if (e.target.id === "pump") {
    const size = getComputedStyle(balloon).getPropertyValue("--size");
    balloon.style.setProperty("--size", parseFloat(size) + 0.2);
  }
});
