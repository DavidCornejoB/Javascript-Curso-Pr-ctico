//CREAMOS CLASE CONSTRUCTORA:

function auto(marca, modelo, anio){
    this.marca = marca,
    this.modelo = modelo,
    this.anio = anio
}

//UNA VEZ TENGAMOS UNA CLASE CONSTRUCTORA, PODEMOS CREAR VARIOS OBJETOS A PARTIR DE ÉLLA:

var auto1 = new auto("Ford", "Explorer XLT", 2017);
var auto2 = new auto("Ford", "Mustang GT", 1968);
var auto3 = new auto("Ford", "Mustang Match III", 1971);

/* LA CLASE CONSTRUCTORA ES COMO UN OBJETO MOLDE A PARTIR DEL CUAL PODEMOS CREAR VARIOS OBJETOS QUE 
   COMPARTAN LOS MISMOS TIPOS DE PROPIEDADES, COMO POR EJEMPLOS LOS AUTOS QUE COMPARTEN LAS PROPIEDADES}
   DE "MARCA", "MODELO" Y "ANIO".
*/