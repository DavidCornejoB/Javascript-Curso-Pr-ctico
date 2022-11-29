const formulario = document.getElementById('form')
const input1 = document.getElementById('calculo1')
const input2 = document.getElementById('calculo2')
const botonCalcular = document.getElementById('btnCalcular')
const resultado = document.getElementById('result')

formulario.addEventListener('submit', calcular)

function verificarInput() {
    console.log("Verificando...");
}

function calcular(event) {
    event.preventDefault()
    console.log("Calculando...");
    var valor1 = input1.value
    var valor2 = input2.value
    var resultado = valor1 + valor2

    resultado.innerText = "Resultado: " + resultado
}