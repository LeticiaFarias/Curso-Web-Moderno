const prod1 = { }  // Chaves representam obejtos, enquanto arrays são representados com colchetes []
prod1.name = 'Celular Ultra mega' // Ele criou o nome dinamicamente
prod1.price = 498.98
prod1['Desconto legal'] = 0.40  //evitar atributos com espaços

console.log(prod1)

const prod2 = {
    name: 'camisa polo',
    price: 50.2,
    obj: {
        atributo: 1,
        obj: {
            atributo: 2   //objetos aninhados
        }
    }
}
console.log(prod2)
console.log(typeof(prod2))