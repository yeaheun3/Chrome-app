// 사용하려는 이미지 배열로 만들어주기 (폴더에 있는 이름이랑 같아야 함.)
const images = ["0.png", "1.png", "2.jpg"];

// 배열에서 랜덤하게 이미지 골라주기
const chosenImage = images[Math.floor(Math.random() * images.length)];

// JS에서 HTML로 랜덤하게 선택된 img를 추가하기(JS에서 html element 생성하기)
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

// img를 html의 body에 넣어주기
document.body.appendChild(bgImage);
