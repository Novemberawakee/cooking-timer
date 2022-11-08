const button = document.querySelector("#btn");
const header = document.querySelector("#header");

let min = 0;
let sec = 0;

button.addEventListener("click", startTimer);

function startTimer() {
    const countdown = document.querySelector("#countdown");
    min = Number(document.querySelector("#min").value);
    sec = Number(document.querySelector("#sec").value);

    if (min === 0 & sec === 0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'please enter minutes or seconds to start the timer',
        })
        return false;
    }
    
    header.textContent = "In progress...";
    input.style.display = "none";
    btn.style.display = "none";

    amountTime = min * 60 + sec;

    function calculateTime() {
        let minutes = Math.floor(amountTime/60);
        let seconds = amountTime%60;

        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        countdown.textContent = `${minutes} : ${seconds}`;
        amountTime--;

        if (amountTime < 0) {
            stopTimer();
            amountTime = 0;
        }

        function stopTimer() {
            clearInterval(timerId);
            document.querySelector("#done").play();
            header.textContent = "DONE! 😊";
        }
    }

    let timerId = setInterval(calculateTime, 1000);
}

