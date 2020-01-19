function Carro(velocidadeMaxima = 200, delta = 5) {
   // Atributo privado
   let velocidadeAtual = 0

   // Método público
   this.acelerar = function() {
      if(velocidadeAtual + delta <= velocidadeMaxima) {
         velocidadeAtual += delta
      } else {
         velocidadeAtual = velocidadeMaxima
      }
   }

   // Método publico responsável por pegar a velocidade atual
   this.getVelocidadeAtual = function() {
      return velocidadeAtual
   } 
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar() // Cada vez que a função é chamada, a velocidade aumenta
console.log(ferrari.getVelocidadeAtual())

console.log(typeof(Carro))
console.log(typeof(ferrari))