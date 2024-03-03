const lampada = document.getElementById('ilampadaOff');
const turnOn = document.getElementById('iligar');
const turnOff = document.getElementById('idesligar');


function ligar(){
    lampada.src  = 'img/ligada.jpg';
}

function desligar(){
    lampada.src = 'img/desligada.jpg';
}

function quebrar(){
    lampada.src = 'img/quebrada.jpg'
}


turnOn.addEventListener('click', ligar);
turnOff.addEventListener('click', desligar);
lampada.addEventListener('mouseover', ligar);
lampada.addEventListener('mouseleave', desligar);
lampada.addEventListener('dblclick', quebrar);
