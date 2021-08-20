let endDate = Date.UTC(2021, 8, 16, 4);
let timerElement = document.getElementById('timer');
let year, month, day, hour, minute, second;
let daysLeft;
let timeLeft, timeLeftString;
let video = document.getElementById('background-vid');

function getCountdown(){
    
    timeLeft = (endDate - Date.now())%86400000;
    let date = new Date(timeLeft);

    hour = date.getHours() - 19;
    if(hour < 0){
        hour += 24;
    }
    minute = date.getMinutes();
    second = date.getSeconds();
}

function formatTime(){
    getCountdown();
    //month = month < 10 ? `0${month}` : month;
    //day = day < 10 ? `0${day}` : day;
    hour = hour < 10 ? `0${hour}` : hour;
    minute = minute < 10 ? `0${minute}` : minute;
    second = second < 10 ? `0${second}` : second;

    timeLeftString = `${daysLeft}d ${hour}h ${minute}m ${second}s`;
}

function setTime(){
    daysLeft = Math.floor((endDate-Date.now())/86400000);
    if(daysLeft < 0){
        let header = document.getElementById('title');
        header.textContent = 'Site will be updated once new information becomes available.'
        let countdown = document.getElementById('countdown');
        document.body.removeChild(countdown);
    }
    else{
        formatTime();
        timerElement.textContent = timeLeftString;
    }
}

setTime();
setInterval(() => {setTime();}
, 1000);
