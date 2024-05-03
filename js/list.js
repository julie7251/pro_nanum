$(document).ready(function () {
    // 페이지당 표시할 항목 수
    var itemsPerPage = 3;
  
    // 이전에 클릭한 페이지 번호를 저장하기 위한 변수
    var prevClickedPage = null;
  
    // 처음에 첫 페이지를 표시
    showPage(1);
  
    // 페이지 클릭 이벤트 처리
    $(".pagination a").click(function(event){
        event.preventDefault(); // 기본 동작인 페이지 링크 이동 방지
        var currentPage = parseInt($(this).text()); // 클릭된 페이지 번호 가져오기
        showPage(currentPage); // 해당 페이지의 항목을 표시
  
        // 페이지네이션에서 활성화된 클래스 관리
        $(".pagination a").removeClass("active");
        $(this).addClass("active");
  
        // 이전에 클릭한 페이지 번호의 색상과 굵기를 원래대로 변경
        if (prevClickedPage !== null) {
            $(".pagination a").eq(prevClickedPage - 1).css({
                "color": "",
                "font-weight": ""
            });
        }
  
        // 클릭한 페이지 번호를 저장하고 색상을 빨간색, 굵기를 bold로 변경
        prevClickedPage = currentPage;
        $(this).css({
            "color": "#134aa9",
            "font-weight": "bold"
        });
  
        // 활성화된 페이지에서 위로 200px 이동
        var scrollTo = $(this).offset().top - 2000;
        $('html, body').animate({
            scrollTop: scrollTo
        }, 300);
    });
  
    // 해당 페이지의 항목을 표시하는 함수
    function showPage(pageNumber) {
        // 모든 항목을 숨김
        $(".all-list1 > .list-wrap").hide();
  
        // 해당 페이지의 항목만 표시
        var startIndex = (pageNumber - 1) * itemsPerPage;
        var endIndex = startIndex + itemsPerPage;
        $(".all-list1 > .list-wrap").slice(startIndex, endIndex).show();
    }
  
    // 탭 클릭 이벤트 핸들러 추가
    $(".tab-nav li a").on("click", function (e) {
        e.preventDefault();
        $(".tab-nav li a").removeClass("active");
        $(this).addClass("active");
  
        $(".all-list, .all-list1").hide();
        let target = $(this).attr("href");
        $(target).show();
  
        // 탭 클릭 후 Sly.js 다시 로드
        // reloadSly();
    });
  
    // 초기 탭 클릭
    $(".tab-nav li a").eq(0).trigger("click");
  
    // tab-nav 슬라이드 기능
    var on = $('.tab-nav').find('.activetop').index();
    var options = {
        horizontal: 1,
        itemNav: 'centered', //basic , centered,
        speed: 300,
        smart: 1,
        activateOn: 'click',
        mouseDragging: 1,
        touchDragging: 1,
        activateMiddle: 1,
        releaseSwing: 1,
        activeClass:   'activetop',
        startAt: on
        // itemSelector:1
    };
    var frame = new Sly('.tab-nav-wrapper', options).init();
  
    // 햄버거 아이콘을 클릭하면 모바일 메뉴 리스트를 토글합니다.
    $(".m-bt").click(function () {
        $(".nav-mb").toggleClass("active");
        const htmlRoot = $("html");
        const state = $(this).hasClass("ani");
        if (state) {
            // 햄버거 버튼을 눌렀을 때 x가 보이도록 클래스를 추가합니다.
            $(this).removeClass("ani");
            // 메뉴가 나타날 때 스크롤이 되지 않도록 설정합니다.
            htmlRoot.removeClass("active");
            // top-nav의 이미지가 보이도록 설정합니다.
            $(".top-nav img").css("visibility", "visible");
        } else {
            // 햄버거 버튼을 눌렀을 때 x가 사라지도록 클래스를 제거합니다.
            $(this).addClass("ani");
            // 메뉴가 나타날 때 스크롤이 되지 않도록 설정합니다.
            htmlRoot.addClass("active");
            // top-nav의 이미지가 안 보이도록 설정합니다.
            $(".top-nav img").css("visibility", "hidden");
        }
    });
  
    // 헤더의 로고 이미지 클릭 시 카운터 초기화
    $(".hd-inner img").click(function () {
        initializeCounter();
    });
  
    // 우측토글
    // Get the button and list elements
    const toggleBt1 = document.getElementById("toggle-bt1");
    const areaList = document.getElementById("area-list");
  
    const toggleBt2 = document.getElementById("toggle-bt2");
    const monthlyList = document.getElementById("monthly-list");
  
    const toggleBt3 = document.getElementById("toggle-bt3");
    const orderList = document.getElementById("order-list");
  
    toggleBt1.addEventListener("click", function () {
        areaList.classList.toggle("active");
        // Close other lists
        monthlyList.classList.remove("active");
        orderList.classList.remove("active");
    });
    toggleBt2.addEventListener("click", function () {
        monthlyList.classList.toggle("active");
        // Close other lists
        areaList.classList.remove("active");
        orderList.classList.remove("active");
    });
    toggleBt3.addEventListener("click", function () {
        orderList.classList.toggle("active");
        // Close other lists
        areaList.classList.remove("active");
        monthlyList.classList.remove("active");
    });
  
    // 찜하기
    // 페이지가 모두 로드된 후에 이벤트 리스너를 설정합니다.
    const heartButtons = document.querySelectorAll(".hart-icon");
    heartButtons.forEach(function(heartButton) {
        heartButton.addEventListener("click", function (e) {
            heartButton.classList.toggle("act"); // 'act' 클래스를 토글
        });
    });
  
    // 버튼 클릭 시 list.html로 이동하는 이벤트 리스너를 추가합니다.
    $("#bt-menu button").click(function () {
        window.location.href = "list.html";
    });
  });
  