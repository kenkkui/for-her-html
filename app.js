import initEvents from "./mouseMsg.js";

const noBtn = document.querySelector("a[data-no-btn]");
const yesBtn = document.querySelector("a[data-yes-btn]");

noBtn.addEventListener("click", () => {
  const opacity = window.getComputedStyle(noBtn).getPropertyValue("opacity");

  if (parseFloat(opacity) < 0.3) {
    const parent = noBtn.parentElement;
    parent.remove();

    yesBtn.parentElement.style.scale = "1.6";
  }

  noBtn.style.opacity = (parseFloat(opacity) - 0.4).toString();
});

initEvents();
