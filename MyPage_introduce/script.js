// header toggle 버튼
const gnb = document.querySelector(".gnb");
const menu = document.querySelector(".menu");
const trigger = document.querySelector(".trigger");

trigger.onclick = () => {
    trigger.classList.toggle("active");
    menu.classList.toggle("show");
  }

$("header a ").click(function (e) {
  $.scrollTo(this.hash || 0, 1500);
  e.preventDefault();
});

const myName = document.querySelector("#name");

myName.onclick = () => {
  if(myName.innerText == "권민주") {
    myName.innerText = "KWON MIN JOO"
  } else if(myName.innerText == "KWON MIN JOO") {
    myName.innerText = "권민주"
  }
}
const chT = document.querySelector("#changeText");

chT.onclick = () => {
  if(chT.innerText == "CONTACT ME") {
    chT.innerText = "♥ ♡ ♥ ♡"
    chT.style.color = "crimson"
  } else if(chT.innerText == "♥ ♡ ♥ ♡") {
    chT.innerText = "CONTACT ME"
    chT.style.color = "#222"
  }
}
