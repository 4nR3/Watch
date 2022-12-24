let i = 1;

function contador() {
    document.getElementById("contador").innerHTML = i++
}

function reiniciarContador(){
    i = 1;
    document.getElementById("contador").innerHTML = 0;
}