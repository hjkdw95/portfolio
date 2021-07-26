// 모바일 화면에서 글자 <br>로 자동 줄나누기 시키기
let media = window.matchMedia("screen and (max-width: 1024px)");
let detailHeader = document.querySelector(".detailJS");


    if(media.matches) {
        // 개행을 위해서 innerHTML으로 처리
        detailHeader.innerHTML = `혹시, 저에 대해<br/>좀 더 알고싶으신가요?😁`;
        console.log("min");
    } else {
        detailHeader.innerHTML = `혹시, 저에 대해 좀 더 알고싶으신가요?😁`;
        console.log("over");
    };