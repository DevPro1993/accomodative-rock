
const startPage = document.getElementById('start-page');
const exercisePage = document.getElementById('exercise-page');

const timerRange = document.getElementById('time-input');
const timeSelectedDiv = document.getElementById('selected-time');
const startButton = document.getElementById('start-button');

const c1 = document.getElementById('c-1');
const c2 = document.getElementById('c-2');
const c3 = document.getElementById('c-3');
const c4 = document.getElementById('c-4');

let scoreMap = null;
let keyInputCount = null;



timeSelectedDiv.innerText = timerRange.value;
timerRange.addEventListener('input', () => {
    timeSelectedDiv.innerText = timerRange.value;
})


startButton.addEventListener('click', () => {
    startTimer(timerRange.value);
})

window.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'ArrowRight') {
        if (keyInputCount !== null) {
            keyInputCount++;
        }
        if (keyInputCount % 4 === 0 && keyInputCount !== 0) {
            rotate(c1);
            rotate(c2);
            rotate(c3);
            rotate(c4);
        }
    }
    
})












function startTimer(selectedTime) {
    startPage.classList.add('d-none');
    exercisePage.classList.remove('d-none');
    keyInputCount = 0;
    scoreMap = new Map();

    setTimeout(() => {
        //saveResults()
        startPage.classList.remove('d-none');
        exercisePage.classList.add('d-none');
        keyInputCount = null;
        scoreMap = null;
    }, selectedTime*60000)
}



function rotate(el) {
    const rotationArr = [0,90,180,270];
    const randomIndex = Math.floor(Math.random() * rotationArr.length);
    el.style.transform = `rotate(${rotationArr[randomIndex]}deg)`;
}


