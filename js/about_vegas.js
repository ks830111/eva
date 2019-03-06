// vegas 플러그인
$(function(){
    $('.about-visual').vegas({
        slides: [
            { src: "images/about-visual1.jpg" },
            { src: "images/about-visual2.jpg" },
            { src: "images/about-visual3.jpg" },
            { src: "images/about-visual4.jpg" },
            { src: "images/about-visual5.jpg" },
            { src: "images/about-visual6.jpg" }
        ],
        timer: false, // 하단 진행그래프 설정
        delay: 2000, // 대기시간
        shuffle: false, // 랜덤 재생
        // false true
    });
});

// // 자작 페이드 비주얼 배경
// $(function(){

//     var img_num = 1; // 이미지 번호
//     var duration = 6000; // 시간

//     setInterval(function(){
//         // 이미지 번호 증가
//         img_num++;
//         // 이미지가 마지막이면 처음으로
//         if(img_num > 5) {img_num = 1;}

//         $('#content .main-visual')
//         //  .fadeTo(시간ms, 투명도, 콜백함수)
//         .fadeTo(500,0, function(){
//             //  다음 이미지 변경
//             $(this).css({
//                 backgroundImage: 'url(images/main-visual'+ img_num +'.jpg)'
//             })
//         }).fadeTo(2000,1) // = Fade In
        
//     }, duration)

// });