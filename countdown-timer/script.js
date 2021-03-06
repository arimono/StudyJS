const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const theCoup = '31 Jan 2021';

function countdown(){
    const theCoupDate = new Date(theCoup);
    const currentDate = new Date();
    const totalSeconds = (currentDate-theCoupDate)/1000;
    const days = Math.floor(totalSeconds/3600/24);//floor for nearest
    const hours= Math.floor(totalSeconds/3600) % 24;
    const minutes= Math.floor(totalSeconds/60)%60;
    const seconds= Math.floor(totalSeconds)%60;

    console.log(days, hours, minutes, seconds);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
countdown();
setInterval(countdown, 100);