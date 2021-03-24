let input = document.getElementById("inputEnviar");
let mensagensContainer = document.getElementById("mensagensContainer");

let data = new Date();

function detectar(event) {
    let tecla = event.keyCode;

    if (tecla == "13") {
        clicarEnviar();
    } 
}

function hora() {
    let horas = data.getHours();
    return horas;
}

function minuto() {
    let minutos = data.getMinutes();
    return minutos;
}

function clicarEnviar() {
    if ((input.value != "") && (input.value != " ")) {
        enviarMensagem();
    }
}

function enviarMensagem() {

    mensagensContainer.innerHTML += 
        `<div class="enviada mensagem">
            <p class="texto">${input.value}</p>
            <p class="horario">${hora()}:${minuto()}</p>
        </div>`
    ;

    setTimeout(receberResposta, 1500);

    input.value = "";
}

function horaSomada(h, m) {
    if (m <= 57) {
        return `${h}:${m + 2}`;
    } else if (m == 58) {
        return `${h + 1}:00`;
    } else {
        return `${h + 1}:01`;
    }
} 

function receberResposta() {

    mensagensContainer.innerHTML += 
        `<div class="recebida mensagem">
            <p class="texto"> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Sequi veritatis maxime accusantium quasi quo praesentium 
                cupiditate debitis
            </p>
            <p class="horario">${horaSomada(hora(), minuto())}</p>
        </div>`
    ;
}