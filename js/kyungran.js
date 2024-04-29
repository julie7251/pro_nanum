// 경란
// ============================================ tab-nav 슬라이드 기능
$(document).ready(function() {
  // Initialize Sly on the tab navigation wrapper
  var options = {
      horizontal: 1,
      itemNav: "centered",
      speed: 600,
      smart: 1,
      activateOn: "click",
      mouseDragging: 1,
      touchDragging: 1,
      activateMiddle: 1,
      releaseSwing: 1,
      activeClass: "activetop",
      startAt: $(".tab-nav").find(".activetop").index(), // Use the index of the active tab on load
      easing: "easeInOutQuart"
  };

  var frame = new Sly(".tab-nav-wrapper", options).init();

  // Click event for tab titles
  const tabtitel = $(".tab-nav li a");
  tabtitel.click(function(e) {
      e.preventDefault();

      // Remove 'active' class from all tabs and then add it to the clicked tab
      tabtitel.removeClass("active");
      $(this).addClass("active");

      // Hide all content and show the target content
      $(".all-list").hide();
      let target = $(this).attr("href");
      $(target).show();

      // After updating the tab, refresh the Sly instance to the index of the newly activated tab
      var newIndex = $(this).parent().index(); // Assuming <a> is a direct child of <li>
      frame.toCenter(newIndex); // Move the slider to the center based on the new index
  });

  // Trigger a click on the first tab to initialize the state
  tabtitel.eq(0).trigger("click");
});

// =========================================== 수정된 tab-nav 슬라이드 기능
// window.addEventListener("load", function () {
//   var on = $('.tab-nav').find('.activetop').index();
//   console.log(on);
//   var options = {
//       horizontal: 1,
//       itemNav: 'centered',
//       speed: 600,
//       smart: 1,
//       activateOn: 'click',
//       mouseDragging: 1,
//       touchDragging: 1,
//       activateMiddle: 1,
//       releaseSwing: 1,
//       activeClass: 'activetop',
//       startAt: on,
//       easing: 'easeInOutQuart',
//   };

//   // Sly 인스턴스 초기화
//   var frame = new Sly('.tab-nav-wrapper', options).init();

//   // 탭 클릭 이벤트 처리
//   const tabTitles = $(".tab-nav li a");
//   tabTitles.click(function (e) {
//       e.preventDefault();

//       // 활성 클래스 업데이트
//       tabTitles.removeClass("active");
//       $(this).addClass("active");

//       // 컨텐츠 보여주기/숨기기
//       $(".all-list").hide();
//       let target = $(this).attr("href");
//       $(target).show();

//       // Sly 캐러셀을 해당 탭의 인덱스로 이동
//       var newIndex = $(this).parent().index();
//       frame.toCenter(newIndex);
//   });

//   // 초기 활성 탭 트리거
//   if (on >= 0) {
//       tabTitles.eq(on).trigger("click");
//   } else {
//       tabTitles.eq(0).trigger("click");
//   }
// });



// ===========================================  우측토글
window.addEventListener("load", function () {
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
});


// ================================================== 찜하기
window.addEventListener("load", function () {
    // 페이지가 모두 로드된 후에 이벤트 리스너를 설정합니다.
    const heartButtons = document.querySelectorAll(".hart-icon");
    heartButtons.forEach(function(heartButton) {
      heartButton.addEventListener("click", function (e) {
        heartButton.classList.toggle("act"); // 'act' 클래스를 토글
      });
    });
  });


  