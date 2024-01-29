const h1 = document.querySelector("div.hello h1");

console.dir(h1);

//animation을 위한 tool은 javaScript, style을 위한 tool은 CSS
function handleTitleClick() {
  // classList.toggle -> 요소의 class 목록에 class가 이미 존재하면 제거하고, 없으면 추가하는 method
  h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);
