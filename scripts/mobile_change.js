let media = window.matchMedia("screen and (max-width: 1024px)");

const detailHeader = document.querySelector(".detailJS");
const skillBox = document.querySelector("#skillBox");
const aboutBox = document.querySelector("#aboutBox");

const interactive = document.querySelector(".interactive");
const brunch = document.querySelector(".brunch");
const carrot = document.querySelector(".carrot");

const js = document.querySelector("#js");
const communication = document.querySelector("#com");



function fadeIn() {     
    let scroll = document.documentElement.scrollTop;
    if(scroll > 0) {
        js.classList.add("boxup");
    }
    if(scroll > 160) {
        communication.classList.add("boxup");
    }
}


function mobileAction() {
    if(media.matches) {
        // 개행을 위해서 innerHTML으로 처리
        detailHeader.innerHTML = `혹시, 저에 대해<br/>좀 더 알고싶으신가요?😁`;
    
        // skill box fade in 기능
        window.addEventListener("scroll", fadeIn);
    
        // skills part 세로배열
        skillBox.classList.remove("main-skills");
        skillBox.classList.add("skills");
    
        // about detail 세로배열
        aboutBox.classList.remove("about-detail");
        aboutBox.classList.add("about-detail-column");
    
        // 모바일일 때 a tag link github으로 변경(우선)
        interactive.setAttribute("href", "https://github.com/hjkdw95/layer-practice");
        brunch.setAttribute("href", "https://github.com/hjkdw95/brunch-page");
        carrot.setAttribute("href", "https://github.com/hjkdw95/javascript101/tree/main/carrot");
    } else {
        detailHeader.innerHTML = `혹시, 저에 대해 좀 더 알고싶으신가요?😁`;
    
        // skills part 가로배열
        skillBox.classList.add("main-skills");
        // about detail 가로 배열
        aboutBox.classList.add("about-detail");
    };
}


mobileAction();




