const mouseMsgElem = document.querySelector("#mouse-msg");
const mainContentElem = document.querySelector("#main-content");

let idleTimeout;
const idleTime = 2400;

const state = {
  mouseout: false,
  idle: false,
};

function updateMouseMsg() {
  if (state.mouseout || state.idle) {
    mouseMsgElem.classList.add("active");
  } else {
    mouseMsgElem.classList.remove("active");
  }
}

function setState(prop, val) {
  state[prop] = val;
  updateMouseMsg();
}

function handlePointerMove(e) {
  const { clientX: x, clientY: y } = e;

  mouseMsgElem.animate(
    {
      left: `${x + 10}px`,
      top: `${y - 30}px`,
    },
    {
      duration: 480,
      fill: "forwards",
    }
  );

  window.clearTimeout(idleTimeout);

  idleTimeout = window.setTimeout(() => {
    setState("idle", true);
    mouseMsgElem.innerHTML = "hey where are you :(";
  }, idleTime);

  setState("idle", false);
}

function handleMouseOut() {
  setState("mouseout", true);
  mouseMsgElem.innerHTML = "hey where do you think you're going >:(";
}

function handleMouseOver() {
  setState("mouseout", false);
}

export default function initEvents() {
  mainContentElem.addEventListener("mouseout", handleMouseOut);
  mainContentElem.addEventListener("mouseover", handleMouseOver);
  document.body.addEventListener("pointermove", handlePointerMove);
}
