var derlys = {
  nombre: "derlys",
  apellido: "dominguez",
  edad: "33",
};
var paola = {
  nombre: "paola",
  apellido: "motta",
  edad: "38",
};

function imprimirNombreEnMayusculas({nombre}) {
  console.log(nombre.toUpperCase());
}

imprimirNombreEnMayusculas(derlys);
imprimirNombreEnMayusculas(paola);
imprimirNombreEnMayusculas({ nombre: 'bram'})
//imprimirNombreEnMayusculas({apellido: 'gomez'})