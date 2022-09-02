// variables operacionales
var operandoA
var operandoB
var operacion


function init(){
    //variables
    var resultado = document.getElementById("resultado")
    var seven = document.getElementById('seven')
    var eigth = document.getElementById("eight")
    var nine = document.getElementById("nine")
    var divisor = document.getElementById("divisor")
    var four = document.getElementById("four")
    var five = document.getElementById("five")
    var six = document.getElementById("six")
    var multiplicador = document.getElementById("multiplicador")
    var one = document.getElementById("one")
    var two = document.getElementById("two")
    var three = document.getElementById("three")
    var menos = document.getElementById("menos")
    var clear = document.getElementById("clear")
    var zero = document.getElementById("zero")
    var igual = document.getElementById("igual")
    var mas = document.getElementById("mas")

    //Eventos
    
    one.onclick = function(e){
        resultado.textContent = resultado.textContent + "1";
    }
    two.onclick = function(e){
        resultado.textContent = resultado.textContent + "2";
    }
    three.onclick = function(e){
        resultado.textContent = resultado.textContent + "3";
    }
    four.onclick = function(e){
        resultado.textContent = resultado.textContent + "4";
    }
    five.onclick = function(e){
        resultado.textContent = resultado.textContent + "5";
    }
    six.onclick = function(e){
        resultado.textContent = resultado.textContent + "6";
    }
    seven.onclick = function(e){
        resultado.textContent = resultado.textContent + "7";
    }
    eigth.onclick = function(e){
        resultado.textContent = resultado.textContent + "8";
    }
    nine.onclick = function(e){
        resultado.textContent = resultado.textContent + "9";
    }
    zero.onclick = function(e){
        resultado.textContent = resultado.textContent + "0";
    }

    //Botones no numericos

    clear.onclick = function(e){
     resetear()
}
mas.onclick = function(e){
    operandoA = resultado.textContent
    operacion = "+"
    limpiar()
}
menos.onclick = function(e){
    operandoA = resultado.textContent
    operacion = "-"
    limpiar()
}
multiplicador.onclick = function(e){
    operandoA = resultado.textContent
    operacion = "*"
    limpiar()
}
divisor.onclick = function(e){
    operandoA = resultado.textContent
    operacion = "/"
    limpiar()
}
igual.onclick = function(e){
    operandoB = resultado.textContent
    resolver()
}
}

//metodos

function limpiar(){
    resultado.textContent = ""
}
function resetear(){
    resultado.textContent = ""
    operandoA = 0
    operandoB = 0
    operacion = ""
}
function resolver(){
    var res = 0
    switch(operacion){
        case "+":
            res = parseFloat(operandoA) + parseFloat(operandoB)
            break

        case "-":
            res = parseFloat(operandoA) - (operandoB)
            break
        
        case "*":
            res = parseFloat(operandoA) * (operandoB)
            break

        case "/":
            res = parseFloat(operandoA) / (operandoB)
            break
    }
    resetear()
    resultado.textContent = res
}