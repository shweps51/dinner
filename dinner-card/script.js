const envelope = document.getElementById("envelope");
const openButton = document.getElementById("openButton");

const startScreen = document.getElementById("startScreen");
const invitation = document.getElementById("invitation");

const answerButton = document.getElementById("answerButton");
const answer = document.getElementById("answer");

const hearts = document.getElementById("hearts");


/* Открытие конверта */

openButton.addEventListener("click", function () {

    envelope.classList.add("open");

    setTimeout(function () {
        startScreen.classList.add("hide");
    }, 900);

    setTimeout(function () {
        invitation.classList.add("show");
        createHearts();
    }, 1300);

});


/* Можно также открыть конверт нажатием на него */

envelope.addEventListener("click", function () {

    if (!envelope.classList.contains("open")) {

        envelope.classList.add("open");

        setTimeout(function () {
            startScreen.classList.add("hide");
        }, 900);

        setTimeout(function () {
            invitation.classList.add("show");
            createHearts();
        }, 1300);

    }

});


/* Кнопка "Я приду" */

answerButton.addEventListener("click", function () {

    answer.classList.add("show");

    createManyHearts();

    answerButton.textContent = "До встречи ❤️";

});


/* Одно летающее сердце */

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.textContent = "♥";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize = (15 + Math.random() * 20) + "px";

    heart.style.animationDuration = (3 + Math.random() * 3) + "s";

    hearts.appendChild(heart);

    setTimeout(function () {
        heart.remove();
    }, 6000);
}


/* Постепенное появление сердечек */

function createHearts() {

    let count = 0;

    const interval = setInterval(function () {

        createHeart();

        count++;

        if (count >= 12) {
            clearInterval(interval);
        }

    }, 250);
}


/* Много сердечек после ответа */

function createManyHearts() {

    let count = 0;

    const interval = setInterval(function () {

        createHeart();

        count++;

        if (count >= 25) {
            clearInterval(interval);
        }

    }, 100);

}