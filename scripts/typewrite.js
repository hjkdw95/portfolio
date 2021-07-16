let mainTitle = document.getElementById("main-title");
const content = "Glad to Meet You."
let index = 0;;

// content의 글자가 하나씩 늘어나게 - index로
function typing() {
    let text = `${content[index++]}`;
    if (index <= content.length) {
        mainTitle.textContent += text;
    }   
}

setInterval(typing, 100);
