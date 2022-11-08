const adviceNumber = document.getElementById("advice-number");
const adviceText = document.getElementById("advice-text");
const adviceBtn = document.getElementById("generator-btn");
const url = "https://api.adviceslip.com/advice";

async function getAdvice() {
    const res = await fetch(url);
    const { slip: { id, advice } } = await res.json();
    adviceNumber.innerText = id;
    adviceText.innerText = advice;
}

getAdvice()

adviceBtn.addEventListener("click", getAdvice)