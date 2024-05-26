let timerDisplay = document.getElementById('timer');
    let startButton = document.getElementById('startButton');
    let countdown;
    let alertSound = new Audio('https://www.soundjay.com/button/beep-07.wav'); // Beep sound

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
        startTimer(20 * 60, timerDisplay, function() {
            alertSound.play();
            alert('20 minutes have passed!');
            startButton.style.display = 'block';
        });
    }

    function start10MinuteTimer() {
        startTimer(10 * 60, timerDisplay, function() {
            alertSound.play();
            alert('10 minutes have passed!');
            startButton.style.display = 'block';
        });
    }

    startButton.addEventListener('click', function() {
        startButton.style.display = 'none';
        start10MinuteTimer();
    });

    // Start the first 20-minute timer
    start20MinuteTimer();