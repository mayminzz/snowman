// 파일 업로드 영역
const fileZone = document.querySelector(".file-zone");

// 파일 업로드 영역에 사용하는 클래스
const className = "on";

// 드롭 요소가 중복된 경우 처리
fileZone.addEventListener("dragover", (event) => {
  // 기본 이벤트 작동 해지
  event.preventDefault();
  fileZone.classList.add(className);
});

// 드래그가 요소를 벗어날 경우 처리
fileZone.addEventListener("dragleave", () => {
  // 기본 이벤트 작동 해지
  event.preventDefault();
  fileZone.classList.remove(className);
});

// 드롭 처리
fileZone.addEventListener("drop", (event) => {
  // 기본 이벤트 작동 해지
  event.preventDefault();
  fileZone.classList.remove(className);

  // File 객체 참조
  const transferdFiles = event.dataTransfer.files;

  // 이미지 표시
  displayImages(transferdFiles);
});

/** 이미지 표시 처리  */
function displayImages(transferdFiles) {
  // 이미지 파일 보관 배열
  const imageFileList = [];

  // 파일 수
  const fileNum = transferdFiles.length;

  // 이미지 파일인 경우에만 작업
  for (let i = 0; i < fileNum; i++) {
    // * : 정규식으로 이미지의 속성을 가지고 있다면?(이미지의 속성을 가지고 있다면, 이미지가 맞다면)
    if (transferdFiles[i].type.match("image.*") === false) {
      return;
    }
    imageFileList.push(transferdFiles[i]);
  }

  // 이미지 표시 영역 참조
  const imagePreviewArea = document.querySelector(".image-list");

  // 각 이미지 파일 처리
  for (const imageFile of imageFileList) {
    // 이미지 파일 불러오기
    const fileReader = new FileReader();
    fileReader.readAsDataURL(imageFile);
    fileReader.addEventListener("load", (event) => {
      const image = new Image();
      image.src = event.target.result;
      // 표시 영역 첫부분에 이미지 파일 표시
      imagePreviewArea.insertBefore(image, imagePreviewArea.firstChild);
    });
  }
}

// // 특정 요소를 활용해서 웹 브라우저 안에서 드래그 & 드랍 기능을 사용했을 때, 드롭한 해당 요소의 파일 정보를 읽어내는 이벤트 속성이 존재
// // e.dataTransfer.files
