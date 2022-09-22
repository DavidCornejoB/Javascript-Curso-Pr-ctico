/**
 * FUNCION PARA DETERMINAR SI EL TRIANGULO ES O NO ISÓSCELES
 */
function isIsosceles(lado1, lado2) {
    if(lado1 == lado2){
        return true;
    } else {
        return false;
    }
}

/**
 * FUNCION PARA CALCULAR LA ALTURA DEL TRIANGULO
 */
function alturaTriangulo(lado1, base) {
    return altura = Math.sqrt((lado1 * lado1) - ((base * base) / 4));
}

/**
 * FUNCION QUE INTERACTÚA DIRECTAMENTE CON EL HTML
 */
function calcularAlturaTriangulo() {
    const input1 = document.getElementById("lado1");
    const lado1 = input1.value;

    const input2 = document.getElementById("lado2");
    const lado2 = input2.value;

    const input3 = document.getElementById("base");
    const base = input3.value;

    const isosceles = isIsosceles(lado1, lado2);
    if(isosceles == true){
        const altura = alturaTriangulo(lado1, base);
        alert(altura);
    } else {
        alert("El triángulo no es isósceles");
    }
}