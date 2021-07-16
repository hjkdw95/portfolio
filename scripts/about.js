let aboutTitle = document.getElementById("main-title");
const aboutContent = "Glad to Meet You."
let i = 0;

function typing() {
    let text = `${aboutContent[index++]}`;
    if (i <= aboutContent.length) {
        aboutTitle.textContent += text;
    }   
}

setInterval(typing, 100);
