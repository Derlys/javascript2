var derlys = {
    nombre: 'derlys',
    apellido: 'dominguez',
    edad: 45,
    peso: 65
}
console.log(` Al inicio del año ${derlys.nombre} pesa ${derlys.peso} kg`)

const INCREMENTO_PESO = 0.2

const aumentarDePeso = (persona) => persona.peso += INCREMENTO_PESO
const adelgazar = (persona) => persona.peso -= INCREMENTO_PESO


for (var i = 1; i <= 365; i++ ){
  var random = Math.random()

    if (random <= 0.25){
        aumentarDePeso(derlys)
    }else if (random <= 0.5) {
        adelgazar(derlys)
    }
}

console.log(` Al final del año ${derlys.nombre} pesa ${derlys.peso.toFixed(2)} kg`)
