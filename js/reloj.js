function cargarReloj(){

let reloj = document.getElementById("relojP");

let fecha = new Date();
let hora = fecha.getHours();
let minutos = fecha.getMinutes();
let segundos =  fecha.getSeconds();

let tiempoReloj="";

if(hora<=9)
    {tiempoReloj+="0";}

tiempoReloj+=hora+":";

if(minutos<=9)
    {tiempoReloj+="0";}

tiempoReloj+=minutos+":";

if(segundos<=9)
    {tiempoReloj+="0";}

tiempoReloj+=segundos;

reloj.innerHTML = tiempoReloj;
};

setInterval(cargarReloj, 1000);