// 경란
// ============================================ tab-nav 슬라이드 기능
// $(document).ready(function() {
//   // Initialize Sly on the tab navigation wrapper
//   var options = {
//       horizontal: 1,
//       itemNav: "centered",
//       speed: 600,
//       smart: 1,
//       activateOn: "click",
//       mouseDragging: 1,
//       touchDragging: 1,
//       activateMiddle: 1,
//       releaseSwing: 1,
//       activeClass: "activetop",
//       startAt: $(".tab-nav").find(".activetop").index(), // Use the index of the active tab on load
//       easing: "easeInOutQuart"
//   };

//   var frame = new Sly(".tab-nav-wrapper", options).init();

//   // Click event for tab titles
//   const tabtitel = $(".tab-nav li a");
//   tabtitel.click(function(e) {
//       e.preventDefault();

//       // Remove 'active' class from all tabs and then add it to the clicked tab
//       tabtitel.removeClass("active");
//       $(this).addClass("active");

//       // Hide all content and show the target content
//       $(".all-list").hide();
//       let target = $(this).attr("href");
//       $(target).show();

//       // After updating the tab, refresh the Sly instance to the index of the newly activated tab
//       var newIndex = $(this).parent().index(); // Assuming <a> is a direct child of <li>
//       frame.toCenter(newIndex); // Move the slider to the center based on the new index
//   });

//   // Trigger a click on the first tab to initialize the state
//   tabtitel.eq(0).trigger("click");
// });


// tab-nav 수정된 코드
$(document).ready(function () {
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
    easing: "easeInOutQuart",
  };

  var sly = new Sly(".tab-nav-wrapper", options).init();

  // 각 탭에 대한 클릭 이벤트 핸들러 추가
  $(".tab-nav li a").each(function () {
    $(this).on("click", function (e) {
      e.preventDefault();
      $(".tab-nav li a").removeClass("active");
      $(this).addClass("active");
      $(".all-list").hide();
      let target = $(this).attr("href");
      $(target).show();

      sly.reload();
    });
  });
  sly.reload();

  $("button").each(function () {
    $(this).on("click", function () {
      sly.reload();
    });
  });
  // 초기 탭 클릭
  $(".tab-nav li a").eq(0).trigger("click");
});

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


  