document.addEventListener("DOMContentLoaded", function () {
  // 각 메뉴 아이템을 가져옵니다.
  var serviceMenuItem = document.querySelector(".top-menu li:nth-child(1) a");
  var programMenuItem = document.querySelector(".top-menu li:nth-child(2) a");
  var boardMenuItem = document.querySelector(".top-menu li:nth-child(3) a");
  var reviewMenuItem = document.querySelector(".top-menu li:nth-child(4) a");

  // 서비스 소개 메뉴 클릭 시 스크롤 이벤트를 추가합니다.
  serviceMenuItem.addEventListener("click", function (e) {
    e.preventDefault();
    scrollToElement(".section1");
  });

  // 프로그램 메뉴 클릭 시 스크롤 이벤트를 추가합니다.
  programMenuItem.addEventListener("click", function (e) {
    e.preventDefault();
    scrollToElement(".section2");
  });

  // 게시판 메뉴 클릭 시 스크롤 이벤트를 추가합니다.
  boardMenuItem.addEventListener("click", function (e) {
    e.preventDefault();
    scrollToElement(".section3");
  });

  // 후기 메뉴 클릭 시 스크롤 이벤트를 추가합니다.
  reviewMenuItem.addEventListener("click", function (e) {
    e.preventDefault();
    scrollToElement(".section4");
  });

  // 지정된 요소로 스크롤하는 함수를 정의합니다.
  function scrollToElement(selector) {
    var element = document.querySelector(selector);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  }

  // 창 스크롤 이벤트 리스너를 추가합니다.
  window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    if (window.scrollY === 0) {
      header.style.boxShadow = "none";
    } else {
      header.style.boxShadow = "-1px 2px 10px 4px rgba(0, 0, 0, 0.05)";
    }
  });

  // 카운터 초기화
  $(".timer").each(function () {
      var $this = $(this);
      var countTo = $this.attr('data-to');
      $({ countNum: $this.text() }).animate({
          countNum: countTo
      }, {
          duration: 3000,
          easing: 'linear',
          step: function () {
              $this.text(Math.floor(this.countNum));
          },
          complete: function () {
              $this.text(this.countNum);
          }
      });
  });
});
