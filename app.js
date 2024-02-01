// document를 통해 HTML 안의 element를 JS로 가져오기. input이랑 greetings
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greetings = document.querySelector("#greetings");
// .hidden 가져오기 일반적으로 string만 포함된 변수는 대문자로 표기함.
const HIDDEN_CLASSNAME = "hidden";
// 반복적으로 사용하는, 오타나면 안되는 string은 변수로 만들어줌.
const USERNAME_KEY = "username";

// eventListner 함수로 이벤트 객체를 받아오기 + perventDefault 메서드로 새로고침되는 것 방지
function onSubmitLogin(event) {
  // submit을 눌렀을 때 새로고침되지 않았으면 함.
  event.preventDefault();
  // 제출한 이름 username으로 설정하기
  const username = loginInput.value;
  // 이름을 제출하면 localStorage에 저장하게 해주기
  localStorage.setItem(USERNAME_KEY, username);
  // 이름을 제출하면 form이 사라지기
  loginForm.classList.add(HIDDEN_CLASSNAME);
  // 이름을 제출하면 Hello + 이름이 나오게
  paintGreetings(username);
}

// 반복적으로 사용되는 코드는 함수로 만들어주기
function paintGreetings(username) {
  greetings.innerText = `Hello ${username}`;
  greetings.classList.remove(HIDDEN_CLASSNAME);
}

// 새로고침해도 이름을 기억할 수 있게하기. -> local Storage에 이름이 있으면 거기서 받아오기
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // show the form -> 디폴트를 다 숨겨져있게 한다음 .hidden 지우기
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  // submit을 눌렀을 때 어떤 변화가 있길 바람.
  loginForm.addEventListener("submit", onSubmitLogin);
} else {
  // show the greetings
  paintGreetings(savedUsername);
}
