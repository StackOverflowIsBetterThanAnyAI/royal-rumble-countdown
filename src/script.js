let timerId = null;

function displayCountdown(number) {
  const countdownElement = document.getElementById('countdown');
  countdownElement.innerHTML = number < 10? `0${number}` : number;

  if (number > 0) {
    timerId = setTimeout(() => displayCountdown(number - 1), 1000);
  }
}

function resetCountdown() {
  clearTimeout(timerId);
  timerId = null;
}

displayCountdown(10);
