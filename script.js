const daysss = document.getElementById('dayss');
const hoursss = document.getElementById('hourss');
const minutesss = document.getElementById('minutess');
const secondsss = document.getElementById('secondss');

let countdownInterval;

function setTargetDate() {
    clearInterval(countdownInterval);
    daysss.innerHTML = 0;
    hoursss.innerHTML = 0;
    minutesss.innerHTML = 0;
    secondsss.innerHTML = 0;

    const dateInput = document.getElementById("myDate").value;
    if (dateInput) {
        // Combine date input with midnight time
        const targetDateTimeString = `${dateInput}T00:00:00`;
        const targetDate = new Date(targetDateTimeString).getTime();

        // Check if the target date is in the future
        if (targetDate > Date.now()) {
            countdown(targetDate);
            countdownInterval = setInterval(function() {
                countdown(targetDate);
            }, 1000);
        } else {
            alert("Please enter a future date.");
        }
    } else {
        alert("Please enter a date.");
    }
}

function countdown(targetDate) {
    const currentDate = new Date().getTime();
    const timeDifference = targetDate - currentDate;

    if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (24 * 60 * 60 * 1000));
        const hours = Math.floor((timeDifference % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
        const minutes = Math.floor((timeDifference % (60 * 60 * 1000)) / (60 * 1000));
        const seconds = Math.floor((timeDifference % (60 * 1000)) / 1000);

        daysss.innerHTML = days;
        hoursss.innerHTML = hours;
        minutesss.innerHTML = minutes;
        secondsss.innerHTML = seconds;
    } else {
        // If timeDifference is non-positive, the target date has passed, so display zeros
        daysss.innerHTML = 0;
        hoursss.innerHTML = 0;
        minutesss.innerHTML = 0;
        secondsss.innerHTML = 0;

        // Clear the interval once countdown reaches zero
        clearInterval(countdownInterval);
    }
}
