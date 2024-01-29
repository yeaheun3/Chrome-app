/*  자바스크립트는 이미 HTML에 연결되어 있고 접근하고 읽을 수 있다. 
 document.title = "Hello! from JS!" */
/* 자바스크립트로 HTML의 title이란 항목 가져오기 
title.innerText = "Got you!"; */

const h1 = document.querySelector("div.hello h1");

console.dir(h1);

//색 바꾸는건 CSS에서 하는게 나음 ㅎㅎ
function handleTitleClick() {
  const currentColor = h1.style.color;
  let newColor;
  if (currentColor === "blue") {
    newColor = "pink";
  } else {
    newColor = "blue";
  }
  h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick);

/*
잠시 bye bye

function handleMouseEnter() {
  h1.innerText = "Mouse is here!";
}

function handleMouseLeave() {
  h1.innerText = "Mouse is gone!";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "hotpink";
}

function handleWindowCopy() {
  alert("Copier!");
}

function handleWindowOffline() {
  alert("SOS! no WIFI");
}

function handleWindowOnline() {
  alert("All good~");
} */

/* 이렇게도 쓸 수 있음 !! 
h1.onclick = handleTitleClick; */
/* .addEventListener를 사용하면 removeEventListener < 이걸로 지울 수 있음. 이게 더 좋음
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);
window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline); */
