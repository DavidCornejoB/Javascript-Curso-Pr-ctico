console.log("Figuras geometricas")

/**
 * CODIGO DEL CUADRADO
 */
console.group("CUADRADOS")

function perimetroCuadrado(ladoCuadrado) {
    return ladoCuadrado * 4;
}

function areaCuadrado(ladoCuadrado) {
    return ladoCuadrado * ladoCuadrado;
}

console.groupEnd()

/**
 * CODIGO DEL TRIANGULO
 */
console.group("TRIANGULOS")


function perimetroTriangulo(lado1, lado2, base) {
    return parseInt(lado1, 10) + parseInt(lado2, 10) + parseInt(base, 10);
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
    
}

console.groupEnd()

/**
 * CODIGO DEL CIRCULO
 */
console.group("CIRCULOS")

//SACAR DIAMETRO
function diametroCirculo(radio) {
    return radio * 2;
}

//VALOR DE PI
const PI = Math.PI;

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd()

//AQUI INTERACTUAMOS CON EL HTML

/**
 * CUADRADO
 */
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    alert(area);
}

/**
 * TRIANGULO
 */
function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("lado1");
    const lado1 = input1.value;

    const input2 = document.getElementById("lado2");
    const lado2 = input2.value;

    const input3 = document.getElementById("base");
    const base = input3.value;

    const perimetro = perimetroTriangulo(lado1, lado2, base);
    alert(perimetro);
}

function calcularAreaTriangulo(){

    const input3 = document.getElementById("base");
    const base = input3.value;
    
    const input4 = document.getElementById("altura");
    const altura = input4.value;

    const area = areaTriangulo(base, altura);
    alert(area);
}

/**
 * CIRCULO
 */

function calcularPerimetroCirculo() {

    const input = document.getElementById("radio");
    const radio = input.value;

    const diametro = diametroCirculo(radio);
    const perimetro = perimetroCirculo(diametro);
    alert(perimetro);
    
}

function calcularAreaCirculo() {
    const input = document.getElementById("radio");
    const radio = input.value;

    const area = areaCirculo(radio);
    alert(area);

}