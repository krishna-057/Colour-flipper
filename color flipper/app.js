const colors = ["green", "red", "rgba(133,122,100)", "#9acd32"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const bg = document.getElementById("bg");
bg.addEventListener("click", function () {
    const r_number = Math.floor(Math.random() * 4);
  bg.style.backgroundColor = colors[r_number];
});
btn.addEventListener("click", function () {
  const r_number = Math.floor(Math.random() * 4);
  document.body.style.backgroundColor = colors[r_number];
  color.textContent = colors[r_number];
  color.style.color = colors[r_number];
});
