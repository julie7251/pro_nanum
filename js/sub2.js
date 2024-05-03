window.addEventListener("load", function () {
  const apply = document.querySelectorAll(".apply");
  // 버튼 클릭 시 list.html로 이동하는 이벤트 리스너를 추가합니다.
  apply.forEach(function (item) {
    console.log(item);
    item.addEventListener("click", function () {
      window.location.href = "login.html";
    });
  });
});
