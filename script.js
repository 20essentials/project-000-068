const d = document;
let valor = 0;

d.addEventListener("click", (e) => {
  if (e.target.matches(".center *")) {
    let padre = e.target.closest(".center");
    valor += 20;
    padre.style.setProperty("--hr", `${valor}deg`);
  }
});
