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

function imprimirSiEsMayorDeEdad (persona){
    console.log(`${persona.nombre} es:`)
    if(persona.edad >= 18){
        console.log('mayor de edad')
    } else {
        console.log('menor de edad')
    }
}

imprimirSiEsMayorDeEdad(derlys)
imprimirSiEsMayorDeEdad(paola)
