const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const button = document.querySelector("button");
const origin = {
  x: 200,
  y: 200,
};
const alpha = 0.7;
ctx.fillStyle = "crimson";
ctx.fillRect(200, 200, 100, 100);

const randomRGB = () => {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
};

button.addEventListener("click", () => {
  let color = randomRGB();
  ctx.globalAlpha = alpha;
  ctx.translate(origin.x, origin.y);
  ctx.rotate((Math.PI / 180) * 30);

  // const a = Math.floor(Math.random() * 255) + 1;
  // console.log(a);
  // const b = Math.floor(Math.random() * 255) + 1;
  // const c = Math.floor(Math.random() * 255) + 1;
  // const resultColor = `rgb(${a}, ${b}, ${c})`;

  ctx.fillStyle = color;
  ctx.fillRect(0, 0, 100, 100);
  ctx.translate(-origin.x, -origin.y);
});
