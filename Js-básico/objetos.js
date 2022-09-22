//OBJETOS

var Objeto ={

    propiedad1Objeto: "primera propiedad del objeto",
    propiedad2Objeto: "segunda propiedad del objeto",
    //***
    //***
    //***
    //***
    propiedadNObjeto: "N propiedad del objeto" 
};

//EJEMPLO:

var miAuto ={
    marca: "Ford",
    modelo: "Mustang GT",
    anio: 1968
}

/* EL OBJETO DE NOMBRE "miAuto" CONTIENE LAS SIGUIENTES PROPIEDADES:
   "marca", QUE ES DE TIPO STRING Y GUARDA EL VALOR: "Ford",
   "modelo", QUE ES DE TIPO STRING Y GUARDA EL VALOR: "Mustang GT",
   "anio", QUE ES DE TIPO INT Y GUARDA EL VALOR: 1968
*/ 

//UN OBJETO TAMBIÉN PUEDE TENER UNA FUNCIÓN COMO UNA DE SUS PROPIEDADES:

var miAuto ={
    marca: "Chevrolet",
    modelo: "Camaro SS",
    anio: 1970,
    detalleAuto: function(){
        console.log(`Auto ${this.marca} ${this.modelo} ${this.anio}`);
    }
};

//"this" HACE REFERENCIA AL OBJETO EN CUESTIÓN. EN ÉSTE CASO, A "miAuto"