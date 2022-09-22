/**
 * RECIBIMOS LA LISTA DE PERSONAS Y SUS SALARIOS, PERO SEPARAMOS SOLO LOS SALARIOS
 * Y LOS GUARDAMOS EN UNA NUEVA CONSTANTE salariosCol.
 */
const salariosCol = colombia.map(
    function(persona){
        return persona.salary;
    }
)

/**
 * ORDENAMOS DE MENOR A MAYOR LOS SALARIOS
 */
const salariosColSorted = salariosCol.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB;
    }
);

/**
 * FUNCION PARA DETERMINAR SI UN NUMERO ES PAR O IMPAR
 * @param {*} numero -> NUMERO A DETERMINAR SI ES PAR O NO
 * @returns EL RESULTADO DE SI ES O NO PAR
 */
function esPar(numero) {
    return (numero % 2 === 0);
}

/**
 * FUNCION PARA DETERMINAR LA MEDIA ARITMETICA O PROMEDIO DE UN ARREGLO
 * @param {*} lista -> EL ARREGLO DE CUYOS ELEMENTOS SE DETERMINARÁ EL PROMEDIO
 * @returns EL VALOR DEL PROMEDIO
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
 * FUNCION PARA DETERMINAR LA MEDIANA DE LOS SALARIOS
 * @param {*} lista -> LA LISTA CON LOS SALARIOS
 * @returns EL VALOR DE LA MEDIANA DE LOS SALARIOS DEL ARREGLO
 */
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista)){
        const persona1 = lista[mitad - 1];
        const persona2 = lista[mitad];

        const mediana = calcularMediaAritmetica([persona1, persona2]);
        return mediana;
    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

const medianaGeneralCol = medianaSalarios(salariosColSorted);

/**
 * MEDIANA DEL TOP 10% DE SALARIOS
 */
const spliceStart = parseInt((salariosColSorted.length * 90) / 100);
const spliceCount = parseInt(salariosColSorted.length - spliceStart);

const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount);

const medianaTop10Col = medianaSalarios(salariosColTop10);


console.log("MEDIANA GENERAL: " + medianaGeneralCol);
console.log("MEDIANA TOP 10: " + medianaTop10Col);