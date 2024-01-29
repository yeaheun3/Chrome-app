const h1 = document.querySelector("div.hello h1");

console.dir(h1);

//animation을 위한 tool은 javaScript, style을 위한 tool은 CSS
function handleTitleClick() {
  //raw value를 사용하는 대신 변수로 만들어준다.(clicked를 계속 쓰지 않아도 됨, 변수는 오타도 잡아낼 수 있음)
  const clickedClass = "clicked";
  // 원래 h1에 지정해준 className은 냅두고 특정한 className만 변경하도록 하기
  if (h1.classList.contains(clickedClass)) {
    h1.classList.remove(clickedClass);
  } else {
    h1.classList.add(clickedClass);
  }
}

h1.addEventListener("click", handleTitleClick);
