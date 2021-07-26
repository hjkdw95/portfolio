const works = document.querySelector(".works");
const popups = document.querySelector(".popups");


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
}


// 닫을 팝업창 id 찾기
function shutPopup(event) {
    let id = event.target.parentNode.parentNode.parentNode.id;
    if(id) {
        closePopup(id);
    }
}


// 팝업창 닫기
function closePopup(id){
    let popup = document.getElementById(`${id}`);
    popup.classList.add("disappear");
}



function init() {
    works.addEventListener("click", popupID);
    popups.addEventListener("click", shutPopup);
}

init();
