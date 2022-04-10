const colors = [
  {
    base: "#874356",
    design: "#ffffff",
    text: "#ffffff",
    subText: "#ebebeb"
  },
  {
    base: "#3A3845",
    design: "#ffffff",
    text: "#ffffff",
    subText: "#ebebeb"
  },
  {
    base: "#F6E7D8",
    design: "#a1a1a1",
    text: "#3d3d3d",
    subText: "#636363"
  },
  {
    base: "#fafafa",
    design: "#a1a1a1",
    text: "#3d3d3d",
    subText: "#636363"
  }
];

colors.forEach((color, index) => {
  const div = document.createElement("div");
  div.style = "background-color: " + color['base'];

  document.querySelector("#color-label-" + index).append(div);
});

document.querySelector("#design").addEventListener("change", (event) => {
  const element = document.querySelector("#card-design");
  if (event.target.checked) {
    element.style = "display: initial;";
  } else {
    element.style = "display: none;";
  }
});

document.querySelectorAll(".color-input").forEach(element => {
  element.addEventListener("click", (event) => {
    const id = parseInt(event.target.id.split("-")[1]);

    document.querySelector(".card").style.backgroundColor = colors[id]['base'];
    document.querySelector("#card-design").style.fill = colors[id]['design'];
    document.querySelector(".card-contents > .top").style.color = colors[id]['subText'];
    document.querySelector(".card-contents > .bottom").style.color = colors[id]['subText'];
    document.querySelector(".card-contents > .body").style.color = colors[id]['text'];
  });
});

document.querySelector("#export").addEventListener("click", () => {
  const top = document.querySelector(".card-contents > .top").innerHTML;
  const bottom = document.querySelector(".card-contents > .bottom").innerHTML;
  const body = document.querySelector(".card-contents > .body").innerHTML.replace('<br>', '');
  let defaultFileName = 'card';
  if (body !== "") {
    defaultFileName = body;
  } else if (bottom !== "") {
    defaultFileName = bottom;
  } else if (top !== "") {
    defaultFileName = top;
  }
  const fileName = window.prompt("保存するファイル名を入力してください", defaultFileName);
  if (fileName === null) {
    return;
  }

  html2canvas(document.querySelector(".card"), { backgroundColor: null }).then(canvas => {
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = fileName + ".png";
    link.click();
  });
});

document.querySelector("#top-text").addEventListener("input", (event) => {
  const element = document.querySelector(".card-contents > .top");
  element.innerHTML = event.target.value;
});

document.querySelector("#body-text").addEventListener("input", (event) => {
  const element = document.querySelector(".card-contents > .body");
  element.innerHTML = event.target.value.replace(/\n/g, '<br>');
});

document.querySelector("#bottom-text").addEventListener("input", (event) => {
  const element = document.querySelector(".card-contents > .bottom");
  element.innerHTML = event.target.value;
});