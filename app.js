const h1 = document.querySelector("div.hello h1");

console.dir(h1);

//animation을 위한 tool은 javaScript, style을 위한 tool은 CSS
function handleTitleClick() {
  if (h1.className === "active") {
    h1.className = "";
  } else {
    h1.className = "active";
  }
}

h1.addEventListener("click", handleTitleClick);
