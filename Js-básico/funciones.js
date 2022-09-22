// Funciones declarativas

function miFuncion(){
    return 3;
}

miFuncion();
//Funciones de expresión o anónimas

var miFuncion = function(a, b){
    return a + b;
}

miFuncion();

//Ejemplos:
//Funcion declarativa
function saludarEstudiantes(estudiante){
    console.log(estudiante); //imprime: David
    console.log(`Hola ${estudiante}`);//Imprime: Hola David
}

saludarEstudiantes("David");

function sumar(a, b){
    var resultado = a + b;
    return resultado;//Retorna: 3
}

sumar(1, 2);

//*********************************************** */

//tenemos un objeto llamado parámetro, con 3 propiedades de tipo String
var parametro ={
    propiedad1: "propiedad 1",
    propiedad2: "propiedad 2",
    propiedad3: "propiedad 3"
}

//creamos una función en donde el objeto se duplique
//y se pueda modificar, sin necesidad de modificar al objeto original
const constante = parametro => {

    return {
        //modificamos la propiedad 1 del objeto.
        ...parametro, 
        propiedad1: parametro.propiedad1 = "propiedad 1 modificada"
    }
}
