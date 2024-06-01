const noBtn = document.querySelector("a[data-no-btn]");
const yesBtn = document.querySelector("a[data-yes-btn]");
const app = document.querySelector(".app");

noBtn.addEventListener("click", () => {
  const opacity = window.getComputedStyle(noBtn).getPropertyValue("opacity");

  if (parseFloat(opacity) < 0.3) {
    const parent = noBtn.parentElement;
    parent.remove();

    yesBtn.parentElement.style.scale = "1.6";
  }

  noBtn.style.opacity = (parseFloat(opacity) - 0.4).toString();
});

const idleTime = 2400;
let mouseIdle = false;

function handlePointerMove(e) {
  const { clientX: x, clientY: y } = e;

  window.setTimeout(() => {
    mouseIdle = true;
  }, idleTime);

  mouseIdle - false;

  const newMouseMsg = document.createElement("div.mouse-msg");
}
