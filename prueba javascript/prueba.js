/**
 *  QUE ES UNA VARIABLE Y PARA QUE SIRVE?
 * Una variable es un espacio de memoria asignado para guardar un dato
 * o conjunto de datos
 */

/**
 * CUAL ES LA DIFERENCIA ENTRE DECLARAR E INICIALIZAR UNA VARIABLE?
 * Declarar: Crear una variable
 * Inicializar: Dar un valor fijo a una variable
 */

let variable; //DECLARAR
variable = "soy una variable"; //INICIALIZAR

/**
 * CUAL ES LA DIFERENCIA ENTRE SUMAR NÚMEROS Y CONCATENAR STRINGS?
 * La diferencia reside en el tipo de datos que estamos manejando.
 * Si se tratan de variables numéricas, el símbolo '+' sumará dichas variables.
 * Si se tratan de variables de tipo String, el mismo símbolo '+' concatenará estos strings.
 */

let primerNum = 1;
let segundoNum = 2;
console.log(primerNum + segundoNum); //SUMA: RESULTADO = 3

let primerString = "David";
let segundoString = " Cornejo";
console.log(primerString + segundoString); //CONCATENACIÓN: RESULTADO = "David Cornejo"

/**
 * CUAL OPERADOR ME PERMITE SUMAR O CONCATENAR?
 * el 'mas' (+)
 */

/**
 * DETERMINA EL NOMBRE Y TIPO DE DATO PARA ALMACENAR LAS VARIABLES
 * DE LA SIGUIENTE INFORMACIÓN:
 * Nombre
 * Apellido
 * Nombre de usuario en Platzi
 * Edad
 * Correo electrónico
 * Mayor de edad
 * Dinero ahorrado
 * Deudas
 */

let nombre = "David";
let apellido = "Cornejo";
let usuarioPlatzi = {
    nombre: "David",
    apellido: "Cornejo",
    correo: "luisdavidcorbra24@gmail.com",
    plan: "Platzi Expert"
}
let edad = 24;
let correo = "luisdavidcorbra24@gmail.com";
let mayorEdad = true;
let dineroAhorrado = 500.5;
let deudas = null;

/**
 * QUE ES UNA FUNCION?
 * Una función es una sección de código que puede recibir parámetros de entrada,
 * hacer una tarea o conjunto de tareas con dichos parámetros, y finalmente retornar
 * un parámetro de salida como respuesta.
 */

/**
 * CUANDO ME SIRVE USAR UNA FUNCIÓN EN MI CÓDIGO?
 * Cuando se requiere hacer un proceso largo y que involucre un gran numero de parametros
 */

/**
 * CUAL ES LA DIFERENCIA ENTRE PARAMETROS Y ARGUMENTOS DE UNA FUNCIÓN?
 * Un parámetro es una variable de entrada que recibe una funcion en su definición
 * Un argumento es un dato con el que dicho parámetro ingresa en la función
 */

var funcion = function(name, lastname, nickname){
    let completeName = name + lastname;
    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas "
    + nickname + ".");
}

funcion("David", "Cornejo", "Mossberg");

/**
 * QUE ES UNA CONDICIONAL?
 * Es una estructura de código que ejecutará una u otra acción dependiendo de una
 * condición externa
 */

/**
 * TIPOS DE CONDICIONALES DE JAVASCRIPT Y SUS DIFERENCIAS
 */

//IF: Ejecuta una tarea si se cumple una condición
let age = 15;
if (age >= 18){
    console.log("ES MAYOR DE EDAD");
}

//IF - ELSE: Ejecuta una tarea si se cumple una condición. Si no se cumple, se ejecuta otra tarea.
if (age >= 18){
    console.log("ES MAYOR DE EDAD");
} else {
    console.log("ES MENOR DE EDAD");
}

//IF - ELSE IF - ELSE:
//Ejecuta tareas de acuerdo a un numero de condiciones. Entran mas de una condicion
if (age > 1 && age < 10){
    console.log("ERES NIÑO");
} else if (age > 10 && age < 18){
    console.log("ERES ADOLESCENTE");
} else {
    console.log("ERES ADULTO");
}

//SWITCH:
//Al igual que el caso anterior, ejecuta tareas de acuerdo a un numero de condiciones.
//Cada condición se establece en el "case"
let numero = 1;

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
    default:
        console.log("NUMERO DIFERENTE AL 1, 2 O 3");
}

/**
 * OPERADOR TERNARIO:
 * Evalúa una condición y en base al resultado de esa evaluación devuelve el primer o segundo parámetro.
 */

age = 16;
mayorEdad = false;

//Con 'age > 18 ?' evaluamos si esta condición se cumple o no.
//Si se cumple, ejecuta la primera tarea: "MAYOR DE EDAD".
//Si no se cumple, ejecuta la segunda tarea: "MENOR DE EDAD".
age > 18 ? mayorEdad = true : mayorEdad = false;

/**
 * QUE ES UN CICLO?
 * Es una parte del código que puede ser sujeta a iteraciones o repeticiones.
 */

/**
 * QUE TIPOS DE CICLOS EXISTEN EN JAVASCRIPT
 */

/**
 * WHILE: Ejecutará repetidamente una estructura de código hasta
 * que la condición establecida se cumpla.
 * 
 * En el siguiente caso:
 * Condición establecida: tercerNum != 5 (la variable tercerNum sea diferente de 5)
 * 
 * Estructura a repetirse: tercerNum ++
 * 
 * Resultado: La estructura se repetirá hasta que 'tercerNum' sea 5. Mejor dicho,
 * La estructura se repetirá mientras 'tercerNum' sea diferente de 5.
 */
let tercerNum = 0;
while (tercerNum != 5) { //
    console.log("EL NUMERO AÚN NO ES 5");
    tercerNum ++;
}

/**
 * FOR: Ejecutará repetidamente una estructura de código
 * el número de veces establecido al momento de inicializar el bucle
 * 
 * En el siguiente caso:
 * let i = 0 -> Variable que controlará las repeticiones del for
 * i < tercerNum -> Condición. De forma explícita, dice:
 * el bucle se repetirá mientras la variable 'i' sea menor a la variable 'tercerNum'
 * 
 * i++ -> La variable 'i' se sumará +1 con cada iteración
 */

tercerNum = 5;
for(let i = 0; i < tercerNum; i++){
    //AQUI IRÁ LA ESTRUCTURA DE CÓDIGO QUE QUEREMOS SE REPITA
    console.log(i);
}

/**
 * QUE ES UN CICLO INFINITO Y PORQUÉ ES UN PROBLEMA?
 * Un ciclo infinito es un ciclo que no tiene ninguna estructura de control, por lo tanto,
 * al momento de su ejecución, entrará en un bucle de repetición incapaz de finalizarse ya que no
 * posee ninguna condición que lo limite.
 * 
 * Es un problema, primero, porque al ejecutarse, las líneas de código subsecuentes a dicho ciclo no se 
 * ejecutarán hasta que el ciclo finalice. Como estamos hablando de un ciclo infinito, éstas líneas de código
 * no se ejecutarán nunca. Segundo, porque al llevarse a cabo, puede significar una carga para el procesador
 * que puede terminar en una falla crítica del programa.
 */

/**
 * PUEDO MEZCLAR CICLOS Y CONDICIONALES?
 * SI
 * 
 * En el siguiente caso:
 * La condición del ciclo establece que éste se repetirá mientras el numero
 * sea diferente de 10. Sin embargo, dentro de dicho ciclo se encuentra una condicionante:
 * Si el numero es igual a 5, se establece un "break" que romperá el cliclo de repetición
 * ignorando si su condición se ha cumplido o no
 */

cuartoNum = 0;

while (cuartoNum != 10) {
    if (cuartoNum == 5){
        break;
    }
    cuartoNum ++;
}

/**
 * REPLICA EL COMPORTAMIENTO DE LOS SIGUIENTES CICLOS FOR UTILIZANDO CICLOS WHILE:
 */

 for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

//RESULTADO:
let i = 0;
while (i < 5) {
    console.log("El valor de i es: " + i);
    i++;
}

//*************************************** */

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

//RESULTADO:
i = 10;
while (i >= 2) {
    console.log("El valor de i es: " + i);
    i--;
}

/**
 * QUE ES UN ARRAY?
 * Es una variable que puede almacenar múltiples parámetros.
 * Dichos parámetros pueden incluso ser de distintos tipos de datos.
 */

/**
 * QUE ES UN OBJETO?
 * Es un elemento conformado por varias variables, que son sus atributos
 */

/**
 * CUANDO ES MEJOR USAR OBJETOS O ARRAYS?
 * Un objeto se utiliza cuando disponemos de un modelo o estructura de datos.
 * Por ejemplo, si vamos a guardar objetos personas, los cuales todos tienen los mismos atributos
 * (nombre, apellido, telefono, etc).
 */

/**
 * PUEDO MEZCLAR ARRAYS CON OBJETOS O INCLUSO OBJETOS CON ARRAYS?
 * Se pueden crear arrays que contengan objetos. Por ejemplo, un array de objetos persona
 * Se pueden crear objetos que contengan como atributo un array. Por ejemplo, un objeto que represente
 * a un escritor, y que uno de sus atributos sea una lista de los libros que ha escrito.
 */

/**
 * Crea una función que permita recibir cualquier array como parámetro e imprima su primer
 * elemento
 */
let arreglo = ["param1", "param2", "param3"]
recibirArray = function (array) {
    console.log(array[0]);
}

recibirArray(arreglo);

/**
 * Crea una función que pueda recibir cualquier array como parámetro e imprima
 * todos sus elementos uno por uno (no se vale imprimir el array completo)
 */

let arreglo2 = ["param1", "param2", "param3"]
recibirArray = function (array) {
    for (let index = 0; index < array.length; index++) {
        console.log(array[index]);
    }
}

recibirArray(arreglo2);

/**
 * Crea una función que pueda recibir cualquier objeto como parámetro e imprima
 * todos sus elementos uno por uno
 */

let objeto = {
    nombre: "David",
    apellido: "Cornejo",
    telefono: "4118451"
}

//IMPRIMIMOS LOS PARÁMETROS DEL OBJETO
recibirObjeto = function (object) {
    for (var prop in object) {
        console.log(prop);        
    }
}
recibirObjeto(objeto);

//IMPRIMIMOS LOS VALORES DE LOS PARÁMETROS DEL OBJETO
imprimirObjeto = function (object) {

    Object.values(objeto).forEach(elemento =>
        console.log(elemento))
}

imprimirObjeto(objeto);

