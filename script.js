var dayEl = document.getElementById('days');
var hoursEl = document.getElementById('hours');
var minsEl = document.getElementById('minutes');
var secEl = document.getElementById('seconds');

const newYear = "1 Jan 2021";

function countdown(){

    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const totalSeconds = (newYearDate - currentDate)/1000;

    const days = Math.floor(totalSeconds/86400);
    const hours = Math.floor(totalSeconds/3600) % 24;
    const minutes = Math.floor(totalSeconds/60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    dayEl.innerText = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(minutes);
    secEl.innerHTML = formatTime(seconds);

}

function formatTime(time){
    return time < 10 ? ('0'+time) : time;
}

countdown();

setInterval(countdown, 1000);