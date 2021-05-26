'use strict'

const btn = document.getElementById('play-pause')
const ntx = document.getElementById('next')
var state = 1
var x = document.getElementById("audio").duration
var stateNext = 0
var contador = 0
const playlist = ['Eleven - Khalid', 'Icon - Jaden Smith', 'Instalock - CBLOL']
var timer
var cont

var mn = 0
var sc = 0

btn.addEventListener('click', function () {

    if (state == 1) {
        const audio = document.querySelector('audio')
        audio.play()
        state++
        btn.src = './img/icons/pausa.png'

        timer = setInterval(() => {

            sc++

            if (sc == 60) {
                sc = 0
                mn++
            }

            var format = (mn < 10 ? '0' + mn : mn) + ':' + (sc < 10 ? '0' + sc : sc)
            cont = document.getElementById('timer').innerText = format

        }, 1000);



    } else {
        audio.pause()
        clearInterval(timer)
        state--
        btn.src = './img/icons/play.png'
    }

})

ntx.addEventListener('click', function () {

    stateNext++


    if (stateNext == 1) {

        const audio = document.querySelector('audio')
        const album = document.getElementById('album').src = './img/icons/album-2.jpg'
        let title = document.getElementById('title').innerHTML = 'Icon, <a href="#">@Jaden Smith</a>'
        audio.src = './music/icon.mp3'
      //  btn.src = './img/icons/pausa.png'
        audio.play()

        audio.onloadedmetadata = function () {
            console.log(audio.duration)
        }

        clearInterval(timer)
        sc = 0
        state == 1
        cont = document.getElementById('timer').innerHTML = "00:00"

    } else if (stateNext == 2) {

        const audio = document.querySelector('audio')
        const album = document.getElementById('album').src = './img/icons/album-3.jpg'
        let title = document.getElementById('title').innerHTML = 'Instalock, <a href="#">@CBLOL</a>'
        audio.src = './music/instalock.mp3'
        btn.src = './img/icons/pausa.png'
        audio.play()

        audio.onloadedmetadata = function () {
            console.log(audio.duration)
        }

    } else if (stateNext == 3) {

        // duração 206.419592
        const audio = document.querySelector('audio')
        const album = document.getElementById('album').src = './img/icons/Album.jpg'
        let title = document.getElementById('title').innerHTML = 'Eleven, <a href="#">@Khalid</a>'
        audio.src = './music/Eleven.mp3'
        btn.src = './img/icons/pausa.png'
        audio.play()


        audio.onloadedmetadata = function () {
            console.log(audio.duration)
        }

        stateNext = 0
    }

})

