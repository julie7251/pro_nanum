document.addEventListener("DOMContentLoaded", function () {
  // 카운터 초기화 함수
  function initializeCounter() {
    $(".timer").each(function () {
      var $this = $(this);
      var countTo = $this.attr("data-to");
      $({ countNum: $this.text() }).animate(
        {
          countNum: countTo,
        },
        {
          duration: 3000,
          easing: "linear",
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          },
        }
      );
    });
  }

  // 페이지 로드 시 카운터 초기화
  initializeCounter();

  // 햄버거 아이콘을 클릭하면 모바일 메뉴 리스트를 토글합니다.
  document.querySelector(".m-bt").addEventListener("click", function () {
    document.querySelector(".nav-mb").classList.toggle("active");
    const htmlRoot = document.querySelector("html");
    const state = this.classList.contains("ani");
    if (state) {
      // 햄버거 버튼을 눌렀을 때 x가 보이도록 클래스를 추가합니다.
      this.classList.remove("ani");
      // 메뉴가 나타날 때 스크롤이 되지 않도록 설정합니다.
      htmlRoot.classList.remove("active");
      // top-nav의 이미지가 보이도록 설정합니다.
      document.querySelector(".top-nav img").style.visibility = "visible";
    } else {
      // 햄버거 버튼을 눌렀을 때 x가 사라지도록 클래스를 제거합니다.
      this.classList.add("ani");
      // 메뉴가 나타날 때 스크롤이 되지 않도록 설정합니다.
      htmlRoot.classList.add("active");
      // top-nav의 이미지가 안 보이도록 설정합니다.
      document.querySelector(".top-nav img").style.visibility = "hidden";
    }
  });

  // 헤더의 로고 이미지 클릭 시 카운터 초기화
  document.querySelector(".hd-inner img").addEventListener("click", function () {
    initializeCounter();
  });

  // 각 메뉴 아이템을 가져옵니다.
  var serviceMenuItem = document.querySelector(".top-menu li:nth-child(1) a");
  var programMenuItem = document.querySelector(".top-menu li:nth-child(2) a");
  var boardMenuItem = document.querySelector(".top-menu li:nth-child(3) a");
  var reviewMenuItem = document.querySelector(".top-menu li:nth-child(4) a");

  // 서비스 소개 메뉴 클릭 시 스크롤 이벤트를 추가합니다.
  serviceMenuItem.addEventListener("click", function (e) {
    e.preventDefault();
    scrollToElement(".section1", 90);
  });

  // 프로그램 메뉴 클릭 시 스크롤 이벤트를 추가합니다.
  programMenuItem.addEventListener("click", function (e) {
    e.preventDefault();
    scrollToElement(".section2", 90);
  });

  // 게시판 메뉴 클릭 시 스크롤 이벤트를 추가합니다.
  boardMenuItem.addEventListener("click", function (e) {
    e.preventDefault();
    scrollToElement(".section3", 90);
  });

  // 후기 메뉴 클릭 시 스크롤 이벤트를 추가합니다.
  reviewMenuItem.addEventListener("click", function (e) {
    e.preventDefault();
    scrollToElement(".section4", 90);
  });

  // 지정된 요소로 스크롤하는 함수를 정의합니다.
  function scrollToElement(selector, offset) {
    var element = document.querySelector(selector);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - offset,
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

  // 버튼 클릭 시 list.html로 이동하는 이벤트 리스너를 추가합니다.
  document.getElementById("apply-button").addEventListener("click", function() {
    window.location.href = "list.html";
});
});
