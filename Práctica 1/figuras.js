console.log("Figuras geometricas")

/**
 * CODIGO DEL CUADRADO
 */
console.group("CUADRADOS")
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm")

const perimetroCuadrado = ladoCuadrado * 4
console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm")

const areaCuadrado = ladoCuadrado * ladoCuadrado
console.log("El área del cuadrado es: " + areaCuadrado + "cm2")

console.groupEnd()

/**
 * CODIGO DEL TRIANGULO
 */
console.group("TRIANGULOS")
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

const alturaTriangulo = 5.5;

console.log(
    "Los lados del triángulo miden: " 
    + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm"
    )
    
console.log("La altura del triángulo es: " + alturaTriangulo + "cm")

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo
console.log("El perímetro del triángulo es: " + perimetroTriangulo)

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2
console.log("El area del triangulo es: " + areaTriangulo + "cm2")

console.groupEnd()

/**
 * CODIGO DEL CIRCULO
 */
console.group("CIRCULOS")

const radioCirculo = 4;
const diametroCirculo = radioCirculo * 2;

const PI = Math.PI;

console.log("El radio del circulo es: " + radioCirculo + "cm")
console.log("El diámetro del circulo es: " + diametroCirculo + "cm")

const perimetroCirculo = diametroCirculo * PI;
console.log("El perímetro del circulo es: " + perimetroCirculo)

const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El área del circulo es: " + areaCirculo + "cm2")

console.groupEnd()







