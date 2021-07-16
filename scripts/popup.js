const interBtn = document.querySelector(".interactive-btn");
const brunchBtn = document.querySelector(".brunch-btn");
const carrotBtn = document.querySelector(".carrot-btn");
const momentumBtn = document.querySelector(".momentum-btn");
const habitBtn = document.querySelector(".habit-btn");

function popupID() {
    interBtn.addEventListener("click", () => {
        console.log(interBtn.dataset.indexNumber
    )
    });

    brunchBtn.addEventListener("click", () => {
        console.log(brunchBtn.dataset.indexNumber
    )
    });

    carrotBtn.addEventListener("click", () => {
        console.log(carrotBtn.dataset.indexNumber
    )
    });

    momentumBtn.addEventListener("click", () => {
        console.log(momentumBtn.dataset.indexNumber
    )
    });

    habitBtn.addEventListener("click", () => {
        console.log(habitBtn.dataset.indexNumber
    )
    });
}


popupID();