var derlys = {
    nombre: 'derlys',
    apellido: 'dominguez',
    edad: 33,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    youtuber: true,
    dj: false
}
var paola = {
    nombre: 'paola',
    apellido: 'motta',
    edad: 17,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    youtuber: true,
    dj: false
}

function  imprimirProfesiones (persona){
    console.log(`${persona.nombre} es:`)
    if(persona.ingeniero){

        console.log ('ingeniero')
    }
    if(persona.cocinero){

        console.log ('cocinero')
    }
    if(persona.cantante){

        console.log ('cantante')
    }
    if(persona.youtuber){

        console.log ('youtuber')
    }
    if(persona.dj){

        console.log ('dj')
    }
}

imprimirProfesiones(derlys)

const MAYORIA_DE_EDAD = 18

function esMayorDeEdad(persona){
    return persona.edad >= MAYORIA_DE_EDAD
}

function imprimirSiEsMayorDeEdad (persona){
    if(esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log(`${persona.nombre} es menor edad`)
    }
}

imprimirSiEsMayorDeEdad(derlys)
imprimirSiEsMayorDeEdad(paola)
