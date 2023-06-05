const fontSizeControl = document.querySelector("#font-size-control");
const textSize = document.querySelector("#text");
fontSizeControl.addEventListener("input", (event) =>
{ textSize.style.fontSize = event.currentTarget.value + "px"; })