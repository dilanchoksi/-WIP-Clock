setInterval(update, 1000);
    
function update() {

    let date = new Date();
    document.getElementById("time").innerHTML = formatTime(date);

    function formatTime(date) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let ap = hours >= 12 ? "pm" : "am";
        hours = (hours % 12) || 12;
        hours = formatZeroes(hours);
        minutes = formatZeroes(minutes);
        seconds = formatZeroes(seconds);
        return `${hours}:${minutes}:${seconds} ${ap}`;
    }

    function formatZeroes(time) {
        return time < 10 ? "0" + time : time;
    }

}