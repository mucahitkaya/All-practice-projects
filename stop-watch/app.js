const timeElement = document.querySelector(".watch .time");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

let seconds = 0;
let interval = null;

//Event listeners

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stopp);
resetBtn.addEventListener("click", reset);

//Update the timer
function timer() {
  seconds++;

  //Format our time
  let hours = Math.floor(seconds / 3600);
  let mins = Math.floor((seconds - hours * 3600) / 60);
  let secs = seconds % 60;

  //First digit `0`
  if (secs < 10) secs = `0` + secs;
  if (mins < 10) mins = `0` + mins;
  if (hours < 10) hours = `0` + hours;

  timeElement.innerHTML = `${hours}:${mins}:${secs}`;
}

function start() {
  //
  if (interval) {
    return;
  }

  //setInterval method continues calling the function until clearInterval() is called,or window closed
  //usage:
  //    myInterval = setInterval(function, milliseconds);
  //    clearInterval(myInterval)
  interval = setInterval(timer, 1000);
}

function stopp() {
  clearInterval(interval);
  interval = null;
}

function reset() {
  stopp();
  seconds = 0;
  timeElement.innerHTML = `00:00:00`;
}
