 const notas = [7.7, 6.5, 9.8, 5.4, 3.2, 9.0]

// Sem callback

let notasBaixas = []
for (let i in notas) {
   if (notas[i] < 7){
      notasBaixas.push(notas[i])
   }
}
console.log(notasBaixas)

// Com callback
notasBaixas2 = notas.filter(function (nota) {
   return nota < 7
})

console.log(notasBaixas2)

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)