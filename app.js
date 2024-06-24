let numeroSecreto  = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let intentosUsuario = 3;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento); 
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}`);
        document.getElementById("reiniciar").removeAttribute('disabled');
    } else {
        //si el usuario no acierta
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El Numero secreto es menor');
        } else {
            asignarTextoElemento('p','el Numero secreto es mayor');
        }
        if (intentos >= intentosUsuario){
            asignarTextoElemento('p',`Se excedio el limite de ${intentos} intentos disponibles`);
            document.querySelector('#reiniciar').removeAttribute('disabled');
        }
        intentos++;
        //si excedio el limite de intentos permitidos
    
        limpiarCaja();
    }

    return;
}

//limpia la caja de numero al cada intento.
function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario').value = '';
    

}
function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');

    } else {

    }
    // si el numero generado esta incluido en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}
function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto!');
    asignarTextoElemento('p',`Indica un numero de 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego(){
    // limpiar caja
    limpiarCaja();
    //indicar mendaje de intervalo de numeros
    //generar el numero aleatorio
    condicionesIniciales();
    //deshabilitar boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}
condicionesIniciales();