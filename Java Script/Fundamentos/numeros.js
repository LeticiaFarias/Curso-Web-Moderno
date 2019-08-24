const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) // Verificando se a variável é um inteiro

const avaliacao1 = 9.567
const avaliacao2 = 6.547

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // toFixed = funçao de quantas casas decimais após a vírgula

/*
console.log(media.toString()) // transforma o valor em uma string
*/

console.log(media.toString(2)) // transforma o valor em binário
console.log(media.toString(16)) // transforma o valor em hexadecimal
console.log(typeof media) // tipo da media
console.log(typeof Number) // Number com N maiúsuculo é uma função, não um tipo 