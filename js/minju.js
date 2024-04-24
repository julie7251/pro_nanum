// 민주
window.addEventListener("load", function () {
  //스와이퍼
  var swiper = new Swiper(".nanumsns", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 300,
    centeredSlides: true,
    navigation: {
      nextEl: ".swiper-button-next",
    },
 
});

  // 스크롤 이벤트를 감지하여 메뉴의 상태를 변경하는 함수
  window.addEventListener("scroll", function () {
    var menu = document.getElementById("bt-menu");
    if (window.scrollY > 100) {
      // 스크롤이 100px 이상 되었을 때
      menu.style.bottom = "0"; // 메뉴를 나타나게 합니다.
    } else {
      menu.style.bottom = "-50px"; // 메뉴를 숨깁니다.
    }
  });

});
