      // 카카오맵을 활용해서 우리의 위치를 파악해보자!
// 카카오맵을 활용해서 전국에 존재하는 캠핑장을 마커로 찍어보자.

// https://github.com/public-apis/public-apis
// https://apis.map.kakao.com

const lat = 37.5025398;
const lng = 127.0248679;

let mapContainer = document.querySelector("#map"); //지도를 담을 영역의 DOM 레퍼런스
let mapOptions = {
  //지도를 생성할 때 필요한 기본 옵션
  center: new kakao.maps.LatLng(lat, lng), //지도의 중심좌표.
  level: 14, //지도의 레벨(확대, 축소 정도)
};

let map = new kakao.maps.Map(mapContainer, mapOptions);

let clusterer = new kakao.maps.MarkerClusterer({
  map: map,
  averageCenter: true,
  minLevel: 10,
});

let positions = [
  {
    title: `<div><a href="#">이젠아카데미 강남</a></div>`,
    latlng: new kakao.maps.LatLng(37.5025398, 127.0248679),
  },
  {
    title: `<div><a href="#">그린아이티 강남</a></div>`,
    latlng: new kakao.maps.LatLng(37.4997906, 127.0282769),
  },
  {
    title: `<div><a href="#">하이미디어 강남</a></div>`,
    latlng: new kakao.maps.LatLng(37.4987358, 127.0266779),
  },
  {
    title: `<div><a href="#">코리아IT 강남</a></div>`,
    latlng: new kakao.maps.LatLng(37.5000065, 127.0356027),
  },
];

let markers = [];

for (let i = 0; i < positions.length; i++) {
  let marker = new kakao.maps.Marker({
    map: map,
    position: positions[i].latlng,
  });

  markers.push(marker);

  let infowindow = new kakao.maps.InfoWindow({
    content: positions[i].title,
  });

  const makeOverListener = (map, marker, infowindow) => {
    return () => {
      infowindow.open(map, marker);
    };
  };
  const makeOutListener = (infowindow) => {
    return () => {
      infowindow.close();
    };
  };

  kakao.maps.event.addListener(
    marker,
    "mouseover",
    makeOverListener(map, marker, infowindow)
  );

  kakao.maps.event.addListener(marker, "mouseout", makeOutListener(infowindow));
}

clusterer.addMarkers(markers);
