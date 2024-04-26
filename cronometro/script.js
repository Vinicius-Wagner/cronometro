let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;

function start() {
  stop();  // Stop any previous interval to avoid multiple intervals running simultaneously
  interval = setInterval(timer, 10);  // Update the timer every 10 milliseconds
}

function reset() {
  stop();
  hours = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  updateDisplay();
}

function stop() {
  clearInterval(interval);  // Clear the interval to stop the timer
}

function timer() {
  milliseconds += 10;

  if (milliseconds == 1000) {
    milliseconds = 0;
    seconds++;

    if (seconds == 60) {
      seconds = 0;
      minutes++;

      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
    }
  }

  updateDisplay();
}

function updateDisplay() {
  const hoursElement = document.getElementById('horas');
  const minutesElement = document.getElementById('minutos');
  const secondsElement = document.getElementById('segundos');
  const millisecondsElement = document.getElementById('milissegundos');

  hoursElement.innerText = hours.toString().padStart(2, '0');
  minutesElement.innerText = minutes.toString().padStart(2, '0');
  secondsElement.innerText = seconds.toString().padStart(2, '0');
  millisecondsElement.innerText = milliseconds.toString().padStart(3, '0');
}