$(function(){

  // 모바일 토글 버튼 전환
  $('#btn-toggle').click(function(){
    $('#gnb')
      .slideToggle(0.4)
      .toggleClass('show');
    
    if($('#gnb').hasClass('show')){
      $(this)
        .find('i')
        .removeClass('fa-bars')
        .addClass('fa-times');
    } else{
      $(this)
        .find('i')
        .removeClass('fa-times')
        .addClass('fa-bars')
    }
  });
  // 모바일 토글 버튼 전환 end

  $(window).resize(function(){
    var w = $(window).width();
    // 모바일 break point(=미디어 쿼리)
     if (w >= 768){
      // 화면 키우면 pc메뉴 강제 비표시
      $('#gnb').css('display', 'none');
    } else{
      // 화면 키우면 메뉴가 강제로 닫힘
      $('#gnb').removeClass('show')
      $('header')
       .find('i')
       .removeClass('fa-times')
       .addClass('fa-bars')
    }
  })
})