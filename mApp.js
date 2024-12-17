const numb1 = Math.ceil(Math.random() * 10);
console.log(numb1)
const numb2 = Math.ceil(Math.random() * 10);

const formE1 = document.getElementById("form");
const scoreE1 = document.getElementById("score");
const questionE1 = document.getElementById("question");
const inputE1 = document.getElementById("input");
let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
    score = 0;
}

scoreE1.innerText = `score: ${score}`;

questionE1.innerText = `What is ${numb1} multiply by ${numb2}?`;

const correctAns = numb1 * numb2;

formE1.addEventListener("submit", () => {
    const userAns = +inputE1.value;
    if (userAns === correctAns) {
        score++;
        updateLocalStorage();
    } else {
        score--;
        updateLocalStorage();
    }
});

function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score));
}

