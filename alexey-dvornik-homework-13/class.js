// class Clock {
//     constructor() {
//         this.timer = undefined;
//         this.start = function () {
//             this.timer = setInterval(this.timeRender, 1000);
//         }
//         this.timeRender = function () {
//             const date = new Date();
//             let hours = date.getHours();
//             let minutes = date.getMinutes();
//             let seconds = date.getSeconds();
//             if (hours < 10) {
//                 hours = "0" + hours;
//             }
//             if (minutes < 10) {
//                 minutes = "0" + minutes;
//             }
//             if (seconds < 10) {
//                 seconds = "0" + seconds;
//             }
//             document.querySelector(".js--clock").innerHTML = `${hours} : ${minutes} : ${seconds}`;
//         }
//     }
//     stop () {
//         clearInterval(this.timer);
//     }
// }

class Clock {
    timer = undefined;
    start () {
        this.timer = setInterval(this.timeRender, 1000)
    }
    timeRender () {
        const date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        if (hours < 10) {
            hours = "0" + hours;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        document.querySelector(".js--clock").innerHTML = `${hours} : ${minutes} : ${seconds}`;
    }
    stop () {
        clearInterval(this.timer);
    }
}

const clock = new Clock();

document.querySelector('.js--start').addEventListener('click', () => {
    clock.start();
});

document.querySelector('.js--stop').addEventListener('click', () => {
    clock.stop();
});

