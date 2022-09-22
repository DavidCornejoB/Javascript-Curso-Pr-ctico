//CONDICIONALES:
/**
 * IF
 */

var condicion = true;

if (condicion == true){ //LA CONDICIÓN ES VERDADERA?
    console.log("la condicion es verdadera");
    //SI, LA CONDICION ES VERDADERA. SE EJECUTA EL CÓDIGO DENTRO DE ÉSTE IF
}
//LUEGO DE HABER EJECUTADO EL CODIGO DENTRO DEL IF, SE EJECUTA ÉSTA LINEA

if (condicion == false){//LA CONDICIÓN ES FALSA?
    console.log("la condicion es falsa");
    //NO, LA CONDICION ES FALSA. NO SE EJECUTA EL CÓDIGO DENTRO DE ÉSTE IF
}
//SE SALTA A ÉSTA LÍNEA DE CÓDIGO SIN ENTRAR AL IF

/**
 * IF - ELSE
 */
if (condicion == true){//LA CONDICION ES VERDADERA?
    console.log("la condicion es verdadera");
    //SI, LA CONDICION ES VERDADERA. SE EJECUTA ÉSTE CODIGO SIN ENTRAR AL "ELSE".
}else{
    console.log("la condicion es falsa");
    //NO, LA CONDICION NO ES VERDADERA. NO SE EJECUTA EL "IF" Y SE EJECUTA EL CÓDIGO DENTRO DEL "ELSE"
}

/**
 * IF - ELSE IF
 */
var numero = 1;

if (numero == 1){//EL NÚMERO ES 1?
    console.log("el número es el 1");
    //SI, EL NUMERO ES EL 1. SE EJECUTA SÓLO EL CODIGO DE ÉSTE "IF", SIN ENTRAR AL "ELSE IF" NI AL "ELSE"
}else if (numero == 2){//EL NÚMERO ES 2?
    console.log("el numero no es el 2");
    //NO, EL NUMERO NO ES EL 2. SE EJECUTA SÓLO EL CODIGO DE ÉSTE "ELSE IF" SIN HABER ENTRADO EN EL "IF" NI ENTRAR AL "ELSE"
}else{//EL NÚMERO NO FUÉ NI 1 NI 2?
    console.log("el numero no es ni el 1 ni el 2")
    //EL NUMERO NO ES NI 1 NI 2, POR LO TANTO NO SE EJECUTAN NI EL "IF" NI EL "ELSE IF" Y SE EJECUTA SOLO EL "ELSE"
}

/**
 * SWITCH
 */

switch(numero){
    case 1:
        console.log("NUMERO 1");
        break;
    case 2:
        console.log("NUMERO 2");
        break;
    case 3:
        console.log("NUMERO 3");
        break;
}

/**
 * OPERADOR TERNARIO:
 * Evalúa una condición y en base al resultado de esa evaluación devuelve el primer o segundo parámetro.
 */

 age = 16;

 //Con 'age > 18 ?' evaluamos si esta condición se cumple o no.
 //Si se cumple, ejecuta la primera tarea: "MAYOR DE EDAD".
 //Si no se cumple, ejecuta la segunda tarea: "MENOR DE EDAD".
 age > 18 ? "MAYOR DE EDAD" : "MENOR DE EDAD";