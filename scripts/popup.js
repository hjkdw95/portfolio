const interBtn = document.querySelector(".interactive-btn");
const brunchBtn = document.querySelector(".brunch-btn");
const carrotBtn = document.querySelector(".carrot-btn");
const momentumBtn = document.querySelector(".momentum-btn");
const habitBtn = document.querySelector(".habit-btn");
const works = document.querySelector(".works");


const interExit = document.querySelector(".interactive-exit");
const brunchExit = document.querySelector(".brunch-exit");
const carrotExit = document.querySelector(".carrot-exit");
const momentumExit = document.querySelector(".momentum-exit");
const habitExit = document.querySelector(".habit-exit");

let workLink = document.querySelector(".work-link");

let clickNum; // 열 팝업 id 인덱스
let shutID; // 닫을 팝업 id 인덱스


// id 찾아오기
function popupID(event) {
    let id = event.target.dataset.indexNumber;
    if(id) {
        openPopup(id);
    }
}

// 팝업창 열기
function openPopup(id){
    let popup = document.getElementById(`${id}`);
    popup.classList.remove("disappear");
    changeHeigth(id);
}

// 각 팝업창 높이 조절
function changeHeigth(id) {  
    let popup = document.getElementById(`${id}`);  
    switch(id) {
        case '1' : 
            break;
        case '2' :
            popup.childNodes[3].style.top = "145%";
            break;
        case '3' :
            popup.style.top = "180%";
            break;
        case '4' :
            popup.style.top = "220%";
            break;
        case '5' :
            popup.style.top = "275%";
            break;     
    }
}

// 닫을 팝업창 id 찾기
function shutPopup() {
    interExit.addEventListener("click", (event) => {
        shutID = event.target.parentNode.parentNode.parentNode.id;
        closePopup(shutID);
    })

    brunchExit.addEventListener("click", (event) => {
        shutID = event.target.parentNode.parentNode.parentNode.id;
        closePopup(shutID);
    })

    carrotExit.addEventListener("click", (event) => {
        shutID = event.target.parentNode.parentNode.parentNode.id;
        closePopup(shutID);
    })

    momentumExit.addEventListener("click", (event) => {
        shutID = event.target.parentNode.parentNode.parentNode.id;
        closePopup(shutID);
    })

    habitExit.addEventListener("click", (event) => {
        shutID = event.target.parentNode.parentNode.parentNode.id;
        closePopup(shutID);
    })
}


// 팝업창 닫기
function closePopup(id){
    let popup = document.getElementById(`${id}`);
    popup.classList.add("disappear");
}



function init() {
    works.addEventListener("click", popupID);
    shutPopup();
}

init();
