/*  자바스크립트는 이미 HTML에 연결되어 있고 접근하고 읽을 수 있다. 
 document.title = "Hello! from JS!" */

const title = document.getElementById("title");

console.dir(title);

/* 자바스크립트로 HTML의 title이란 항목 가져오기 */
title.innerText = "Got you!";

console.log(title.id);
console.log(title.className);
