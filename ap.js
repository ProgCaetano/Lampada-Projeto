const lampadaOn = document.getElementById('ilampadaOn');
const lampadaOff = document.getElementById('ilampadaOff');
const lampadaBr = document.getElementById('ilampadaBr')

function ligar(){
    lampadaOn.style.display = 'block';
    lampadaOff.style.display = 'none';
    lampadaBr.style.display = 'none';
}


function desligar(){
    lampadaOn.style.display = 'none';
    lampadaOff.style.display = 'block';
    lampadaBr.style.display = 'none'; 
}

function Quebrar() {
    lampadaOn.style.display = 'none';
    lampadaOff.style.display = 'none';
    lampadaBr.style.display = 'block';
}