const prod1 = { }  // Chaves representam obejtos, enquanto arrays são representados com colchetes []
prod1.nome = 'Celular Ultra mega' // Ele criou o nome dinamicamente
prod1.preco = 498.98
prod1['Desconto legal'] = 0.40  //evitar atributos com espaços

console.log(prod1)

const prod2 = {
    nome: 'camisa polo',
    preco: 50.2,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2   //objetos aninhados
        }
    }
}

console.log(prod2)