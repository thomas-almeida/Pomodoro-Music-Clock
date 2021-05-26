'use strict'

//Criando variáveis para medir o tempo
var mm = 24 //minutos, começa com 24
var ss = 60 //segundos, começa com 60

var tempo = 1000 //variável que determina o intevalo do SetInterval (1000 = 1 segundo)
var cron // variável onde será armazenado o SetInterval

//startar cronometro
function start() {
    //timer() é a função responsável pela lógica do cronometro
    //portanto é a função que deve ser executada a cada intervalo de tempo (tempo = 1000**)
    cron = setInterval(() => { timer() }, tempo)
}

//parar cronometro
function stop() {

    //Clear interval, Para a contagem
    clearInterval(cron)

    //Resetando os valores das variáveis para o início
    mm = 24
    ss = 60

    //Resetando o texto incial do site
    document.getElementById('clock').innerText = "25:00"

}

function timer() {

    //Lógica do contador

    //Fazendo um decrécimo da variável segundos
    ss--

    //Se a variavel segundos for igual a 0
    //Então ela volta a ter o valor inicial e decrescenta 1 minuto
    if (ss == 0) {
        ss = 60
        mm--
    }

    //Formatando para que o relógio sempre fique com 2 dígitos,
    // e mostre os valores da variáveis
    var format = (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss)
    document.getElementById('clock').innerText = format
}

