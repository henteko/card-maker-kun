document.querySelector("#export").addEventListener("click", () => {
  html2canvas(document.querySelector(".card"), { backgroundColor: null }).then(canvas => {
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "card.png";
    link.click();
  });
});

document.querySelector("#top-text").addEventListener("input", (event) => {
  const element = document.querySelector(".card-contents > .top");
  element.innerHTML = event.target.value; 
});

document.querySelector("#body-text").addEventListener("input", (event) => {
  const element = document.querySelector(".card-contents > .body");
  element.innerHTML = event.target.value.replace(/\n/g,'<br>'); 
});

document.querySelector("#bottom-text").addEventListener("input", (event) => {
  const element = document.querySelector(".card-contents > .bottom");
  element.innerHTML = event.target.value; 
});