let temp;
let p = document.getElementById("temporizadorP");
let boton = document.getElementById("iniciarTemp");
let tiempoRestanteTemporizador;
let minutos = 0, segundos = 0;

function iniciarTemporizador() {
    tiempoRestanteTemporizador = prompt("Escriba el tiempo inicial (en segundos)");
    boton.innerHTML="Parar";

    segundos = tiempoRestanteTemporizador % 60;

    if (tiempoRestanteTemporizador >= 60) {
        minutos = Math.floor(tiempoRestanteTemporizador / 60);
    }
    else
        minutos=0;

    p.innerHTML = minutos + "m ";
    p.innerHTML += segundos + "s";

    temp = setInterval(function () {

        console.log(tiempoRestanteTemporizador);

        if (segundos == 0 && minutos>0) {
            minutos--;
            segundos = 59;
            tiempoRestanteTemporizador--;
        }
        else{
            tiempoRestanteTemporizador--;
            segundos --;
        }

        p.innerHTML = minutos + "m ";
        p.innerHTML += segundos + "s";

        if (tiempoRestanteTemporizador == 0) {
            clearInterval(temp);
            boton.innerHTML="Iniciar";
            return;
        }
        
    }, 1000);
}

function pararTemporizador(){
    clearInterval(temp);
    boton.innerHTML="Seguir";
}

function reanudarTemporizador(){

    boton.innerHTML="Parar";
    temp = setInterval(function () {

        console.log(tiempoRestanteTemporizador);

        if (segundos == 0 && minutos>0) {
            minutos--;
            segundos = 59;
            tiempoRestanteTemporizador--;
        }
        else{
            tiempoRestanteTemporizador--;
            segundos --;
        }

        p.innerHTML = minutos + "m ";
        p.innerHTML += segundos + "s";

        if (tiempoRestanteTemporizador == 0) {
            clearInterval(temp);
            boton.innerHTML="Iniciar";
            return;
        }
        
    }, 1000);

}

function reiniciarTemporizador(){
    clearInterval(temp);
    p.innerHTML="0m 0s";
    boton.innerHTML="Iniciar";
    tiempoRestanteTemporizador=0;
}

function accionTemporizador(){

    if(boton.innerHTML=="Iniciar")
        {iniciarTemporizador();}
    else
    if(boton.innerHTML=="Parar")
        {pararTemporizador();}
    else
    if(boton.innerHTML=="Seguir")
        {reanudarTemporizador();}
    
}