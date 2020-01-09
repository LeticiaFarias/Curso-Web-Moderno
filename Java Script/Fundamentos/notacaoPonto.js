console.log(Math.ceil(6.1))     // Arredonda pra cima
console.log(Math.floor(6.1))    // Arredonda pra baixo

const obj1 = {}
obj1.nome = "Bola"             // Mesmo não tendo o atributo nome, ele aloca dinâmicamente
obj1 ['nome'] = "Bola2"        // Aqui ele sobrepõe a primeira
console.log(obj1.nome)         // Imprime de acordo com o que está no  valor do obj1

function Obj(nome) {
 this.nome = nome
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
