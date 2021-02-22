var derlys = {
  nombre: "derlys",
  apellido: "dominguez",
  edad: 33,
};
var paola = {
  nombre: "paola",
  apellido: "motta",
  edad: 38,
};



function imprimirNombreYEdad(persona){

    
    
    console.log ('hola,','me llamo', persona.nombre, 'y tengo', persona.edad + 'años')
}

imprimirNombreYEdad(derlys);
imprimirNombreYEdad(paola);

function nacimiento (persona){
  return {
    ...persona,
    edad: persona.edad + 1
  }
}

nacimiento()
