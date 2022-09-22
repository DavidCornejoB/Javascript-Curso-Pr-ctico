const lista1 = [
    300,
    100, 
    500, 
    400,
];

/**
 * FUNCION PARA DETERMINAR SI UN NUMERO ES PAR O IMPAR
 * @param {*} numero -> EL NUMERO A DETERMINAR SI ES PAR O IMPAR
 * @returns TRUE: SI ES PAR; FALSE: SI ES IMPAR
 */
function esPar(numero) {
    if(numero %2 == 0){
        return true;
    } else {
        return false;
    }
}

/**
 * FUNCION PARA DETERMINAR EL PROMEDIO O MEDIA ARITMÉTICA DE UNA LISTA
 * @param {*} lista -> DE LA CUAL DETERMINAREMOS LA MEDIA ARITMÉTICA
 * @returns EL PROMEDIO O VALOR DE MEDIA ARITMÉTICA DE DICHA LISTA
 */
function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

/**
 * FUNCION PARA DETERMINAR LA MEDIANA DE UNA LISTA
 * @param {*} lista -> DE LA CUAL DETERMINAREMOS LA MEDIANA
 * @returns EL VALOR DE LA MEDIANA DE DICHA LISTA
 */
function calcularMediana(lista) {

    //PRIMERO ORDENAMOS LOS ELEMENTOS DE LA LISTA DE MENOR A MAYOR
    const listaOrdenada = lista.sort();

    //DETERMINAMOS EL VALOR DE LA MITAD DE LA LISTA
    const mitadLista = parseInt(listaOrdenada.length / 2);

    /**
     * FINALMENTE SACAMOS LA MEDIANA DEPENDIENDO DE SI EL NUMERO DE ELEMENTOS
     * DEL ARRAY ES PAR O IMPAR
     */
    let mediana;
    if (esPar(lista1.length)){
        const elemento1 = lista1[mitadLista - 1];
        const elemento2 = lista1[mitadLista];

        const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
        mediana = promedioElemento1y2;
        return mediana;
    } else {
        mediana = lista1[mitadLista]
        return mediana;
    }
}

console.log(calcularMediana(lista1))







