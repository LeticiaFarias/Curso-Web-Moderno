// Coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['Marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
console.log(produto)
delete produto['Marca do produto']
console.log(produto)

const carro = {
   modelo: 'A4',
   valor: 89000,
   ano: 2019,
   proprietario: {
      nome: 'Raul',
      idade: 56,
      endereco: {
         rua: 'ABC',
         mumero: 123
      }
   },
   condutores: [{
      nome: 'Júnior',
      idade: 19
   }, {
      nome: 'Ana',
      idade: 48
   }

]
}

console.log(carro)