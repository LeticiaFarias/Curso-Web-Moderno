//FUNÇÃO SEM RETORNO
function imprimirSoma(a, b) {
 console.log(a + b)
}

imprimirSoma(2, 3)

imprimirSoma(2) //Vai imprimir um valor inteiro e um "Não é um number", undefine

imprimirSoma(1, 5, 6, 7, 25, 8) /* Funciona, mas só vai pegar os dois primeiros valores,
* o resto vai ignorar
*/

//FUNÇÃO COM RETORNO
function soma(a, b = 1) {
 return a + b
}

console.log(soma(2, 9))

console.log(soma(3)) // Vai somar pois o segundo parâmetro tem um valor