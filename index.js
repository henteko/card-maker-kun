document.querySelector("#export").addEventListener("click", () => {
  html2canvas(document.querySelector(".card"), { backgroundColor: null }).then(canvas => {
    let link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "card.png";
    link.click();
  });
});