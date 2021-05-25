'use strict'

let minutes = 0
let seconds = 0

function pomodoro() {

    for (var i=0; i <= 60; i++) {

        seconds++

        if (seconds == 60) {
            minutes++
            seconds = 0
        }

        if (minutes == 2) {

            console.log("*** Intervalo =) ***")
            break
        }

    }

}

console.log(pomodoro())