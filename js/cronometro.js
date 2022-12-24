var n = 1;
var estaParado=true;

let minutes =0;

let button = document.getElementById("cronometro")

var l = document.getElementById("cronometroP");
let cont;

function pararContador() {
    clearInterval(cont);
    button.innerHTML="Seguir"
    
}

function seguirContando(){

    cont = setInterval(function() {

        if(n>=60)
            {
                minutes++;
                n=0;
            }

        l.innerHTML = minutes+"m "+ n+"s";
        n++;
    }, 1000);

    button.innerHTML="Parar"
}

function accion(){

    if(estaParado==true)
        {
            seguirContando();
            estaParado=false;
        }
    else
        {
            pararContador();
            estaParado=true;
        }
}

function reiniciarCronometro(){
    n=0;
    minutes=0;
    l.innerHTML = "0m 0s";
    clearInterval(cont);
    button.innerHTML="Iniciar"
}

