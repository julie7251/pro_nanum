

// -----------------------모바일 돋보기 기능
$(function(){
  let basicFont = 12; // 기본 폰트 크기를 12px로 지정
  $(".zoomIn").click(function(){ // zoomIn을 누르면, 함수 발생
      basicFont++; // basicFont는 1씩 계속 증가하고,
      if( basicFont > 20 ) {basicFont = 20; return false;} // 20 넘어가면 20에서 동작 멈춤
          $(".fontSize").text(basicFont + "px"); /*기존에 크기가 몇인지 알려주던 p 태그의
          텍스트도 현재 폰트 크기랑 같이 변경될 거임*/
          $("#txtBox").css("font-size", basicFont); // txtBox의 폰트 크기는, 변수 basicFont 크기대로 감.
  });
  $(".zoomOut").click(function(){ // zoomOut을 누르면, 함수 발생
      basicFont--; // basicFont가 1씩 계속 감소
      if( basicFont < 10 ) {basicFont = 10; return false;} // 10 이하로 내려가면 10에서 동작 멈춤
          $(".fontSize").text(basicFont + "px");
          $("#txtBox").css("font-size", basicFont);
  });
  $(".origin").click(function(){
      $(".fontSize").text("12px");
      $("#txtBox").css("font-size", "12px");
  });
});



// --------------------------로그인 페이지 이동
// window.addEventListener("load", function () {
//   const apply = document.querySelectorAll(".apply");
// 버튼 클릭 시 list.html로 이동하는 이벤트 리스너를 추가합니다.
//   apply.forEach(function (item) {
//     console.log(item);
//     item.addEventListener("click", function () {
//       window.location.href = "login.html";
//     });
//   });

// -------------------------봉사신청 모달창
function call_confirm(){

if(confirm(`   
[봉사신청내역]

활동내용 : 벽화그리기 봉사
봉사기간 : 2024-05-20 (월)
봉사시간 : 11:00 - 16:00 (총 5시간)
활동장소 : 대구 달서구 성당로51길 32

위 내용을 확인하셨습니까?`)){
alert(`
       신청이 완료되었습니다!`);
}else{
alert(`
       신청을 취소하였습니다.`);
}

};
// });






