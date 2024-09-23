function nomeComp(){
    let name = prompt('Seu nome: ')

    let primeiroNome = name.split(' ')
    
    console.log(`Primeiro nome: ${primeiroNome[0]} `)
}

nomeComp()