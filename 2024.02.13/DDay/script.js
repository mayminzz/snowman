// 1) 기념일을 계산하기 위한 특정한 날짜 정보
// 2) 현 시점의 날짜 정보

//만난지 며칠째 되는 날
let now = new Date();
let firstDay = new Date("2022/02/04");
let toNow = now.getTime();
let toFirst = firstDay.getTime();
let passedTime = toNow - toFirst;
let passedDay = Math.round(passedTime / (24 * 60 * 60 * 1000));
console.log(passedDay);

const accent = document.querySelector("#accent span");
console.log(accent);
accent.innerText = `${passedDay}일`;

//800일
// let future = toFirst + 800 * (24 * 60 * 60 * 1000);
// let someday = new Date(future);
// let year = someday.getFullYear();
// let month = someday.getMonth() + 1;
// let date = someday.getDate();
// const date800 = document.querySelector("#date800");
// date800.innerText = `${year}년 ${month}월 ${date}일`;

//900일
// future = toFirst + 900 * (24 * 60 * 60 * 1000);
// someday = new Date(future);
// year = someday.getFullYear();
// month = someday.getMonth() + 1;
// date = someday.getDate();
// const date900 = document.querySelector("#date900");
// date900.innerText = `${year}년 ${month}월 ${date}일`;

//1095일
// future = toFirst + 1095 * (24 * 60 * 60 * 1000);
// someday = new Date(future);
// year = someday.getFullYear();
// month = someday.getMonth() + 1;
// date = someday.getDate();
// const date1095 = document.querySelector("#date1095");
// date1095.innerText = `${year}년 ${month}월 ${date}일`;

//1200일
// future = toFirst + 1200 * (24 * 60 * 60 * 1000);
// someday = new Date(future);
// year = someday.getFullYear();
// month = someday.getMonth() + 1;
// date = someday.getDate();
// const date1200 = document.querySelector("#date1200");
// date1200.innerText = `${year}년 ${month}월 ${date}일`;

// 함수를 활용해서 상단의 반복적으로 사용되고 있는 변수를 효율적으로 줄여보자!
const calcDate = (days) => {
  let future = toFirst + days * (24 * 60 * 60 * 1000);
  let someday = new Date(future);
  let year = someday.getFullYear();
  let month = someday.getMonth() + 1;
  let date = someday.getDate();
  document.querySelector(
    "#date" + days
  ).innerText = `${year}년 ${month}월 ${date}일`;
};

calcDate(800);
calcDate(900);
calcDate(1095);
calcDate(1200);
