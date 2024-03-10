const lampada = document.getElementById('ilampadaOff');
const turnOn = document.getElementById('iligar');
const turnOff = document.getElementById('idesligar');



function    isBroken (){
    // returne verifica de na string hÁ a palavra desejada, se sim ele traz -1, se não ele traz um número maior que -1
    return lampada.src.indexOf ('quebrada') > -1
}


function ligar(){
    if (!isBroken()){
    lampada.src  = 'img/ligada.jpg';
    turnOn.style.display = 'none';
    turnOff.style.display = 'block';
    }
}

function desligar(){ if (!isBroken()){
    lampada.src = 'img/desligada.jpg';
    turnOn.style.display = 'block';
    turnOff.style.display = 'none';
    }
}

function quebrar(){
    lampada.src = 'img/quebrada.jpg'
}


turnOn.addEventListener('click', ligar);
turnOff.addEventListener('click', desligar);
lampada.addEventListener('mouseover', ligar);
lampada.addEventListener('mouseleave', desligar);
lampada.addEventListener('dblclick', quebrar);
