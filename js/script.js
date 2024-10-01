let timerDisplay = document.getElementById('timerDisplay');
let timerButton = document.getElementById('timerButton');

let startButton = document.getElementById('startButton');
let stopButton = document.getElementById('stopButton');
let resetButton = document.getElementById('resetButton');

let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;

// funzione per formattare il timer in hh:mm:ss
function formatTime(hours, minutes, seconds){
    //aggiungo lo "0" davanti ai numeri singoli
    return String(hours).padStart(2, '0') + ":" + String(minutes).padStart(2, '0') + ":" + String(seconds).padStart(2, '0'); 
};

// funzione per aggiornare il timer ogni secondo
function updateTimer(){
    seconds++;

    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    timerDisplay.innerText = formatTime(hours, minutes, seconds);
}

// funzioni per start, stop e reset
startButton.addEventListener('click', () =>{
    startButton.disabled = true;
    stopButton.disabled = false;

    timer = setInterval(updateTimer, 1000);
});
stopButton.addEventListener('click', () =>{
    startButton.disabled = false;
    stopButton.disabled = true;

    clearInterval(timer);
});
resetButton.addEventListener('click', () =>{
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    timerDisplay.innerText = formatTime(hours, minutes, seconds);
    startButton.disabled = false;
    stopButton.disabled = true;
})