const lista1 = [
    1,
    2,
    3,
    1,
    4,
    1,
];

function calcularModa(lista) {

    const lista1Count = {};

    /**
     * CONTAMOS CUANTAS VECES SE REPITE CADA NÚMERO Y LO ALMACENAMOS
     * EN EL OBJETO lista1Count
     */
    lista.map(
        function (elemento) {
            if (lista1Count[elemento]){
                lista1Count[elemento] += 1;
            } else {
                lista1Count[elemento] = 1;
            }
        }
    );
    
    /**
     * UNA VEZ CONTADOS LOS ELEMENTOS DEL ARRAY, ORDENAMOS DICHOS CONTEOS
     * DE MENOR A MAYOR, PARA SIMPLEMENTE RETORNAR EL ÚLTIMO VALOR QUE
     * CORRESPONDE AL MAAAAAAAYORRR, OSEA LA MODA
     */
    const lista1Array = Object.entries(lista1Count).sort(
        function (valorAcumulado, nuevoValor){
            return valorAcumulado[1] - nuevoValor[1];
        }
    );
    
    const moda = lista1Array[lista1Array.length - 1];
    return moda;
}

console.log(calcularModa(lista1));


