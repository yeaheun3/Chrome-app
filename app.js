/* 
HTML 안의 element를 JS로 가져오기. 하나의 element를 통해 검색하는 방법
const loginForm = document.querySelector("#login-form");
(= const loginform = document.getElementById("login-form");)
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button"); */

// document를 통해 더 짧게 가져오기
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event) {
  event.preventDefault();
  console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);
