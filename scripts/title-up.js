const mainLetter = document.querySelector(".main-letter");

window.onload = function() {
    mainLetter.classList.add("letter-up");
}

// mobile skills 부분 fade in 효과
function fadeIn() {
    const js = document.querySelector("#js");
    const communication = document.querySelector("#com");

    let scroll = document.documentElement.scrollTop;

    if(scroll > 0) {
        js.classList.add("boxup");
    }
    if(scroll > 160) {
        communication.classList.add("boxup");
    }
}



// 모바일 화면일때만 가능하도록 하기
let mql = window.matchMedia("screen and (max-width: 1024px)");

if(mql.matches) {
    window.addEventListener("scroll", fadeIn);
};

