let date = new Date;

let text = document.getElementById("text");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let pause = document.getElementById("pause");

let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;

let game = false;

start.addEventListener("click", () => {
    if (!game) {
        interval = setInterval(() => {
            milliseconds += 10;
            if (milliseconds === 100) {
                seconds += 1;
                milliseconds = 0;
            }
            if (seconds === 60) {
                minutes += 1;
                seconds = 0;
                milliseconds = 0;
            }
            // console.log(seconds + "," + milliseconds);
            text.innerHTML = minutes + ":" + seconds + "." + milliseconds;
        }, 100);
        game = true;
    }
})

stop.addEventListener("click", () => {
        clearInterval(interval)    
        game = false;
        minutes = 0;
        seconds = 0;
        milliseconds = 0;
    text.innerHTML = minutes + ":" + seconds + "." + milliseconds;
})

pause.addEventListener("click",()=>{
    clearInterval(interval);
    game = false;
    text.innerHTML = minutes + ":" + seconds + "." + milliseconds;
})