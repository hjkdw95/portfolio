const interBtn = document.querySelector(".interactive-btn");
const brunchBtn = document.querySelector(".brunch-btn");
const carrotBtn = document.querySelector(".carrot-btn");
const momentumBtn = document.querySelector(".momentum-btn");
const habitBtn = document.querySelector(".habit-btn");

const interExit = document.querySelector(".interactive-exit");
const brunchExit = document.querySelector(".brunch-exit");
const carrotExit = document.querySelector(".carrot-exit");
const momentumExit = document.querySelector(".momentum-exit");
const habitExit = document.querySelector(".habit-exit");

let clickNum; // 열 팝업 id 인덱스
let shutID; // 닫을 팝업 id 인덱스


// id 찾아오기
function popupID() {
    interBtn.addEventListener("click", () => {
        clickNum = interBtn.dataset.indexNumber;
        openPopup(clickNum);
    });

    brunchBtn.addEventListener("click", () => {
        clickNum =brunchBtn.dataset.indexNumber;
        openPopup(clickNum);
    });

    carrotBtn.addEventListener("click", () => {
        clickNum = carrotBtn.dataset.indexNumber;
        openPopup(clickNum);
    });

    momentumBtn.addEventListener("click", () => {
        clickNum = momentumBtn.dataset.indexNumber;
        openPopup(clickNum);
    });

    habitBtn.addEventListener("click", () => {
        clickNum = habitBtn.dataset.indexNumber;
        openPopup(clickNum);
    });
}


// 팝업창 열기
function openPopup(id){
    let popup = document.getElementById(`${id}`);
    popup.classList.remove("disappear");
    switch(id) {
        case '1' : 
            break;
        case '2' :
            popup.childNodes[3].style.top = "150%";
            break;
        case '3' :
            popup.childNodes[3].style.top = "200%";
            break;
        case '4' :
            popup.childNodes[3].style.top = "250%";
            break;
        case '5' :
            popup.childNodes[3].style.top = "275%";
            break;     
    }
}

// 닫을 팝업창 id 찾기
function shutPopup() {
    interExit.addEventListener("click", (sth) => {
        shutID = interExit.parentNode.parentNode.id;
        closePopup(shutID);
    })

    brunchExit.addEventListener("click", (sth) => {
        shutID = brunchExit.parentNode.parentNode.id;
        closePopup(shutID);
    })

    carrotExit.addEventListener("click", (sth) => {
        shutID = carrotExit.parentNode.parentNode.id;
        closePopup(shutID);
    })

    momentumExit.addEventListener("click", (sth) => {
        shutID = momentumExit.parentNode.parentNode.id;
        closePopup(shutID);
    })

    habitExit.addEventListener("click", (sth) => {
        shutID = habitExit.parentNode.parentNode.id;
        closePopup(shutID);
    })
}


// 팝업창 닫기
function closePopup(id){
    let popup = document.getElementById(`${id}`);
    popup.classList.add("disappear");
}



function init() {
    popupID();
    shutPopup();
}

init();
