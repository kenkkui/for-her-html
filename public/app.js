// Elements
const noButton = document.querySelector("button[data-no-button]");
const mouseMsg = document.querySelector(".mouse-msg");

// Index1
let mouseOut = false;

function handleMouseLeave() {
  setTimeout(() => {
    mouseOut = true;
  }, 400);
}

// Mouse leave msg
let mouseIdle = false;

const handlePointerMove = (e) => {
  const { clientX: x, clientY: y } = e;

  if (element.current) {
    element.current.animate(
      {
        left: `${x + 10}px`,
        top: `${y - 30}px`,
      },
      {
        duration: 480,
        fill: "forwards",
      }
    );
  }

  if (timeoutRef.current !== null) {
    clearTimeout(timeoutRef.current);
  }

  timeoutRef.current = window.setTimeout(() => {
    setIdle(true);
  }, idleTime);

  setIdle(false);
};

document.body.addEventListener("pointermove", handlePointerMove);

// Yes/No Buttons
function handleClickNo() {
  const computedStyle = window.getComputedStyle(noButtonRef.current);
  const currOpacity = computedStyle.getPropertyValue("opacity");
  if (currOpacity < "0.2") {
    noButtonRef.current.style.display = "none";
    if (yesButtonRef.current) {
      yesButtonRef.current.style.scale = "1.6";
    }
  }

  noButtonRef.current.style.opacity = String(parseFloat(currOpacity) - 0.25);

  noButtonRef.current.style.transform = "translateY(0)";
}
