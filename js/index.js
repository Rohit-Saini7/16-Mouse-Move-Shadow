const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
const walk = 700;

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;
  if (this !== e.target) {
    x += e.target.offsetLeft;
    y += e.target.offsetTop;
  }
  const xWalk = Math.round((x / width) * walk - walk / 2);
  const yWalk = Math.round((y / height) * walk - walk / 2);

  text.style.textShadow = `
      ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.5),
      ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.5),
      ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.5),
      ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.5)`;
}

hero.addEventListener("mousemove", shadow);
