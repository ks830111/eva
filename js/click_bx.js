$(function(){

    // 버튼 클릭시 위로 가기 금지
    $('.btn0').on('click', function(){
    return false;
    });

    // bx 슬라이더
    $('.bx').bxSlider({
        auto: false, // 자동 재생
        pager: false, // 하단 이동 버튼 on,off
        autoHover: false, // 마우스 올라가면 정지
        controls: true, // 이전, 다음 버튼 on,off
        autoControls: false, // 재생, 정지 버튼
        // false true
    });
  
});