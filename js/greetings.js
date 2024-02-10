// querySelector를 통해 document에서 원하는 요소 가져오기
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greetings = document.querySelector("#greetings");
const HIDDEN_CLASSNAME = "hidden";
const KEY_USERNAME = "username";
const savedUsername = localStorage.getItem(KEY_USERNAME);

// submit해도 새로고침 되지 않게 하기
function onSubmitLogin(element) {
  element.preventDefault();
  // 이름을 입력하면 form이 사라지게 하기
  loginForm.classList.add(HIDDEN_CLASSNAME);
  // 이름을 입력하면 Hello + 이름이 나오게 하기
  const username = loginInput.value;
  paintGreetings(username);
  // 로컬스토리지에 제출한 이름 저장하기
  localStorage.setItem(KEY_USERNAME, username);
}

loginForm.addEventListener("submit", onSubmitLogin);

// 반복되는 코드 함수화해주기
function paintGreetings(username) {
  greetings.classList.remove(HIDDEN_CLASSNAME);
  greetings.innerText = `Hello ${username}`;
}

// 로컬스토리지에 이름이 있으면 greetings만 뜨게하고, 이름이 없으면 form이 뜨게 하기.
if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
} else {
  paintGreetings(savedUsername);
}
