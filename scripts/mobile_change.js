let media = window.matchMedia("screen and (max-width: 1024px)");
let detailHeader = document.querySelector(".detailJS");
let skillBox = document.querySelector("#skillBox");
let interactive = document.querySelector(".interactive");
let brunch = document.querySelector(".brunch");
let carrot = document.querySelector(".carrot")



if(media.matches) {
    // 개행을 위해서 innerHTML으로 처리
    detailHeader.innerHTML = `혹시, 저에 대해<br/>좀 더 알고싶으신가요?😁`;

    // skills part 세로배열
    skillBox.classList.remove("main-skills");
    skillBox.classList.add("skills");

    // 모바일일 때 a tag link github으로 변경(우선)
    interactive.setAttribute("href", "https://github.com/hjkdw95/layer-practice");
    brunch.setAttribute("href", "https://github.com/hjkdw95/brunch-page");
    carrot.setAttribute("href", "https://github.com/hjkdw95/javascript101/tree/main/carrot");
} else {
    detailHeader.innerHTML = `혹시, 저에 대해 좀 더 알고싶으신가요?😁`;

    // skills part 가로배열
    skillBox.classList.add("main-skills");
};

