// ======= GiftTop ========
const giftTop = document.querySelector(".gift_top");
window.addEventListener("load", () => {
  giftTop.innerHTML = `<h4>전 구매 무료상품 및 선물포장과 단독 기프트 메시지 카드 혜택을 즐겨보세요.</h4>`;
});

//====== left gnb =======
const headerUrl = "../json/header.json";
fetch(headerUrl)
  .then((response) => response.json())
  .then((json) => {
    let leftOutput = "";
    json.leftNav.forEach((list) => {
      leftOutput += `
      <li class=${list.class}><a href="#">${list.category}</a></li>`;
    });
    const ulGnb = document.createElement("ul");
    const divGnb = document.querySelector(".gnb");
    divGnb.appendChild(ulGnb);
    ulGnb.innerHTML = leftOutput;

    // ====== right Gnb ======
    let rightOutput = "";

    json.rightNav.forEach((list) => {
      rightOutput += `<a href="#">${list.category}</a>`;
    });

    const gnbRight = document.querySelector(".gnb_right");
    gnbRight.innerHTML = rightOutput;

    // const findIcon = document.createElement("a");
    // findIcon.classList.add("finder");
    // json.rightNav.unshift(findIcon);

    // ======== PC nav_detail_list ========
    const gnbBtns = document.querySelectorAll(".gnb ul li");
    const gnbList = document.querySelector("#nav_detail_list");
    const iframe = document.querySelector("iframe");

    const navHtml = [
      "./nav-html/1-index.html",
      "./nav-html/2-index.html",
      "./nav-html/3-index.html",
      "./nav-html/4-index.html",
      "./nav-html/5-index.html",
      "./nav-html/6-index.html",
    ];

    const gnbDel = document.querySelector(".gnb ul");
    console.log(gnbDel);
    const delBtn = document.createElement("button");

    gnbBtns.forEach((btn, i) => {
      btn.addEventListener("click", (e) => {
        iframe.classList.add("contentiframe");

        // 현재 클릭된 버튼의 인덱스에 해당하는 HTML 파일을 가져옴
        const currentHtml = navHtml[i];

        // 현재 HTML 파일을 iframe의 src 속성에 설정
        iframe.src = currentHtml;

        iframe.style.width = "100%";
        iframe.style.height = "100%";
        gnbList.classList.add("pc_gnb_show");

        delBtn.style.display = "block";

        gnbDel.appendChild(delBtn);
        delBtn.innerText = "닫기";

        delBtn.addEventListener("click", () => {
          gnbList.classList.remove("pc_gnb_show");
          delBtn.style.display = "none";
        });
      });
    });

    // ======== mobile Gnb =========

    const modalGnb = document.querySelector("#mobile_gnb_list");
    const modalTopUl = document.createElement("ul");
    modalGnb.appendChild(modalTopUl);
    modalTopUl.classList.add("modal_top_gnb_list");
    modalTopUl.innerHTML = leftOutput;

    const mobileGnbListBottom = document.querySelector(".gnb_list_bottom");
    const modalBottomUl = document.createElement("ul");
    modalBottomUl.classList.add("modal_bottom_mini_list");
    mobileGnbListBottom.appendChild(modalBottomUl);

    let mobileGnbList = "";
    json.mobileGnb.forEach((mg) => {
      mobileGnbList += `
      <li><a href="#">${mg.catagory}</a></li>`;
    });

    modalBottomUl.innerHTML = mobileGnbList;

    // ======== toggle =========
    const newDiv = document.createElement("div");
    const span1 = document.createElement("span");
    const span2 = document.createElement("span");

    newDiv.classList.add("toggle");
    gnbRight.appendChild(newDiv);
    newDiv.appendChild(span1);
    newDiv.appendChild(span2);
    json.rightNav.push(newDiv);

    newDiv.addEventListener("click", () => {
      newDiv.classList.toggle("active");
      modalGnb.classList.toggle("showModalGnb");
      document.querySelector(".container").classList.toggle("removeContainer");
      document.querySelector(".gift_top").classList.toggle("removeGiftTop");
    });
  })
  .catch((err) => console.log(err));

//오른 쪽 작은 문의사항 창
const queryBtn = document.querySelector("#query");
const miniBox = document.querySelector(".mini_ask");

queryBtn.addEventListener("click", () => {
  miniBox.classList.toggle("show");
});

// ========= footer ==========
const footerUrl = "../json/footer.json";

fetch(footerUrl)
  .then((response) => response.json())
  .then((json) => {
    let titleoutput = "";
    json.forEach((content) => {
      const contents = document.querySelector(".footer_contents");
      titleoutput += `
      <div class="footer_content">
      <h3>${content.title}</h3>
      <p>
      </p>
      </div>"`;
      contents.innerHTML = titleoutput;

      let subtitles = [`${content.subtitle}`];
      console.log(subtitles);

      let subtitleoutput = "";
      subtitles.forEach((subtitle) => {
        const subspan = document.createElement("span");
        subspan.appendChild
      });
    });
    const subTitP = document.querySelector(".footer_content p");
    subTitP.innerHTML = subtitleoutput;
  });
