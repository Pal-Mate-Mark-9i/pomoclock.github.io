let timerDisplay = document.querySelector('.timer');
let startButton = document.querySelector('.startButton');
let countdown;

function startTimer(duration, display, callback) {
    let timer = duration, minutes, seconds;
    countdown = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(countdown);
            callback();
        }
    }, 1000);
}

function start20MinuteTimer() {
    startTimer(20 * 60, timerDisplay, function () {
        alert('20 minutes have passed!');
        startButton.style.display = 'block';
    });
}

function start10MinuteTimer() {
    startTimer(10 * 60, timerDisplay, function () {
        alert('10 minutes have passed!');
        startButton.style.display = 'block';
    });
}

startButton.addEventListener('click', function () {
    startButton.style.display = 'none';
    start10MinuteTimer();
});

// Start the first 20-minute timer
start20MinuteTimer();