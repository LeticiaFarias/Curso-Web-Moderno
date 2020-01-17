//Armazenando uma função em uma variável
const imprimirSoma= function(a, b){
 console.log(a + b)
}
imprimirSoma(1, 2)

// Armazenando uma função ARROW numa variável
const soma = (a, b) => {
 return a + b
} 
console.log(soma(2, 3))

// Retorno implícito 
const subtracao = (a, b) => a - b
console.log (subtracao(2, 3))