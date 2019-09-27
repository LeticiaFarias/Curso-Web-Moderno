const escola = "Cod3r Cursos "

console.log(escola.charAt(4)) // Mostra o índice 4 da string
console.log(escola.charAt(5)) // Mostra o índice 5 na string, nesse caso, vazio
console.log(escola.charCodeAt(3)) // Mostra o número do índice a tabela ASCII

console.log(escola.indexOf('3'))

console.log(escola.substring(3))
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + "!")
console.log(escola.replace(3, 'e'))

console.log('Ana,Maria,Pedro'.split(','))

