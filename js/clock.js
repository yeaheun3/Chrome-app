// h2 태그 자식이 #clock이므로 공백을 주지 않음
const clock = document.querySelector("h2#clock");

// padStart로 시:분:초가 모두 2자리로 나오도록하기 (ex. 19:31:01)
function getClock() {
  const date = new Date();
  // getHours는 number라서 padStart를 사용할 수 없음. String constructor로 감싸서 type을 바꿔줘야됨.
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

/* setInterval(getClock, 1000); 만 쓰면 website가 load되고 1초 후에
시간이 뜨므로 website가 load되자마자 getClock()를 실행하고 
setInterval을 통해 매초마다 함수를 호출하여 매초마다 반복되도록 하기 */
getClock();
setInterval(getClock, 1000);

/* 
<setInterval: 함수가 특정한 시간마다 반복해서 실행되게 하고 싶을 때>
function sayHello() {
  console.log("Hello");
}
> 인자값으로 호출하려는 함수 이름, 호출 사이 시간(밀리초) 써주기
setInterval(sayHello, 5000);

<setTimeout: 함수가 실행되는 것을 지연시키고 싶을 때>
function sayHello() {
  console.log("Hello");
}

> 인자값으로 호출하려는 함수 이름, 호출 사이 시간(밀리초) 써주기
setTimeout(sayHello, 5000);

<padStart>
padStart 함수를 통해 string의 시작부분에 padding을 추가할 수 있다.
<padEnd>
padEnd 함수를 통해 string의 끝부분에 padding을 추가할 수 있다.

"string".padStart(원하는 문자열의 길이, "추가할 string");
*/
