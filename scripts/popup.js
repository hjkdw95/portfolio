const works = document.querySelector(".works");
const popups = document.querySelector(".popups");


// id 찾아오기
function popupID(event) {
    let id = event.target.dataset.indexNumber;
    if(id) {
        openPopup(id);
        changeHeigth(id);
    }
}

// 팝업창 열기
function openPopup(id){
    let popup = document.getElementById(`${id}`);
    popup.classList.remove("disappear");
}

// 각 팝업창 높이 조절
function changeHeigth(id) {  
    let popupStyle = document.getElementById(`${id}`).childNodes[3];  
    switch(id) {
        case '1' : 
            break;
        case '2' :
            popupStyle.style.top = "145%";
            break;
        case '3' :
            popupStyle.style.top = "185%";
            break;
        case '4' :
            popupStyle.style.top = "225%";
            break;
        case '5' :
            popupStyle.style.top = "265%";
            break;     
    }
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
