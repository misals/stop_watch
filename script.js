
// Global variables
const time_ele = document.querySelector('.watch .time');
const start_btn = document.getElementById('start');
const stop_btn = document.getElementById('stop');
const reset_btn = document.getElementById('reset');

let seconds = 0;
let interval = null;

// Event Listeners
start_btn.addEventListener('click', start);
stop_btn.addEventListener('click', stop);
reset_btn.addEventListener('click', reset);

// Update the timer
function timer () {
    seconds++;

    // Format our time
    let hours = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds - (hours * 3600)) / 60);
    let secs = seconds % 60;

    if(secs < 10) secs = "0" + secs;
    if(mins < 10) mins = "0" + mins;
    if(hours < 10) hours = "0" + hours;

    time_ele.innerText = `${hours}:${mins}:${secs}`;
}

// Function to start timer
function start() {
    if(interval) {
        return;
    }

    interval = setInterval(timer, 1000);
}

// Function to stop timer
function stop() {
    clearInterval(interval);
    interval = null;
}

// Function to reset timer
function reset() {
    stop();
    seconds = 0;
    time_ele.innerText = '00:00:00';
}
