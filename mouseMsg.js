const mouseMsgElem = document.querySelector("#mouse-msg");
const mainContentElem = document.querySelector("#main-content");

let idleTimeout;
const idleTime = 2400;

const state = {
  mouseOut: false,
  idle: false,
};

const stateProxy = new Proxy(state, {
  set(target, prop, value) {
    target[prop] = value;
  },
});

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
    // mouseMsgElem.classList.add("active");
    idle = true;
    mouseMsgElem.innerHTML = "hey where are you:(";
  }, idleTime);

  // mouseMsgElem.classList.remove("active");
}

function handleMouseOut() {
  mouseOut = true;
  // mouseMsgElem.classList.add("active");
  mouseMsgElem.innerHTML = "hey>:( where do you think you're going";
}

if (mouseOut || idle === true) {
  mouseMsgElem.classList.add("active");
} else {
  mouseMsgElem.classList.remove("active");
}

export default function initEvents() {
  mainContentElem.addEventListener("mouseout", handleMouseOut);
  document.body.addEventListener("pointermove", handlePointerMove);
}
