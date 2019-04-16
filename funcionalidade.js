function init() {
    //variaveis
    var resultado = document.getElementById('resultado');
    var reset = document.getElementById('reset');
    var somar = document.getElementById('somar');
    var subtrair = document.getElementById('subtrair');
    var multiplicar = document.getElementById('multiplicar');
    var divisão = document.getElementById('divisão');
    var igual = document.getElementById('igual');
    var um = document.getElementById('um');
    var dois = document.getElementById('dois');
    var tres = document.getElementById('tres');
    var quatro = document.getElementById('quatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var sete = document.getElementById('sete');
    var oito = document.getElementById('oito');
    var nove = document.getElementById('nove');
    var zero = document.getElementById('zero');

    //eventos
    um.onclick = function(e) {
        resultado.textContent = resultado.textContent + '1';
    }
    dois.onclick = function(e) {
        resultado.textContent = resultado.textContent + '2';
    }
    tres.onclick = function(e) {
        resultado.textContent = resultado.textContent + '3';
    }
    quatro.onclick = function(e) {
        resultado.textContent = resultado.textContent + '4';
    }
    cinco.onclick = function(e) {
        resultado.textContent = resultado.textContent + '5';
    }
    seis.onclick = function(e) {
        resultado.textContent = resultado.textContent + '6';
    }
    sete.onclick = function(e) {
        resultado.textContent = resultado.textContent + '7';
    }
    oito.onclick = function(e) {
        resultado.textContent = resultado.textContent + '8';
    }
    nove.onclick = function(e) {
        resultado.textContent = resultado.textContent + '9';
    }
    zero.onclick = function(e) {
        resultado.textContent = resultado.textContent + '0';
    }

    reset.onclick = function(e) {
        resetar();
    }

    somar.onclick = function(e) {
        operandoa = resultado.textContent;
        operaçao = "+";
        limpar();
    }

    subtrair.onclick = function(e) {
        operandoa = resultado.textContent;
        operaçao = "-";
        limpar();
    }

    multiplicar.onclick = function(e) {
        operandoa = resultado.textContent;
        operaçao = "*";
        limpar();
    }

    divisão.onclick = function(e) {
        operandoa = resultado.textContent;
        operaçao = "/";
        limpar();
    }

    igual.onclick = function(e) {
        operandob = resultado.textContent;
        resolver();
    }
}

function limpar() {
    resultado.textContent = "";
}

function resetar() {
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operaçao = "";
}

function resolver() {
    var res = 0;
    switch (operaçao) {
        case "+":
            res = parseFloat(operandoa) + parseFloat(operandob);
            break;

        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob);
            break;

        case "*":
            res = parseFloat(operandoa) * parseFloat(operandob);
            break;

        case "/":
            res = parseFloat(operandoa) / parseFloat(operandob);
            break;
    }
    resetar();
    resultado.textContent = res;
}