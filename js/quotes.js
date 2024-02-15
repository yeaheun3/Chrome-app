// quote와 author를 나누어 배열로 만들어주기
const quotes = [
  {
    quote: "I'm not here to be perfect, I'm here to be real.",
    author: "Lady GaGa",
  },
  {
    quote: "I'm not interested in money. I just want to be wonderful.",
    author: "Marilyn Monroe",
  },
  {
    quote:
      "The only thing that feels better than winning is winning when nobody thought you could.",
    author: "Hank Aaron",
  },
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    quote: "If you can dream it, you can do it.",
    author: "Walt Disney",
  },
  {
    quote: "If you want something done, ask a busy person to do it.",
    author: "Laura Ingalls Wilder",
  },
  {
    quote:
      "If your actions inspire others to dream more, learn more, do more and become more, you are a leader.",
    author: "John Quincy Adams",
  },
  {
    quote:
      "The best way to find out if you can trust somebody is to trust them.",
    author: "Ernest Hemingway",
  },
  {
    quote:
      "The only Limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    quote: "We may encounter many defeats but we must not be defeated.",
    author: "Maya Angelou",
  },
];

// 배열 안의 quote와 author 가져오기.
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// quotes 배열에서 10개의 명언 중 랜덤하게 가져오기
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

/* 
Math.round, Math.ceil, Math.floor 로 소수점 없애줄 수 있음. 
hard coding Ver(랜덤하게 얻은 숫자에 10을 곱해서 10가지 quotes 중에 하나가 나오게 하기 : 딱 10가지에만 적용됨) 
-> console.log(quotes[Math.floor(Math.random() * 10]); 
*/

// 랜덤하게 선택된 quote를 #quote아래의 span의 innerText에 넣어주기
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
