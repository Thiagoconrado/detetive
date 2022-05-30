const prompt = require ("prompt-sync")()
console.clear

console.log('Projeto Detetive');
console.log();

console.log('Você esta sendo acusado de cometer um furto a uma farmacia pague mais, aonde estão lhe acusando de ter furtado fraldas, e vamos lhe fazer algumas perguntas para chegarmos a uma conclusao se você é inocente ou culpado');
console.log();


console.log()

    let pontuacao = 0
console.log(' Responda 1 [sim] e 2 [nao] ');

console.log();

     let pergunta1 = prompt('voce foi a farmacia pague mais esses dias? ');
     if(pergunta1 == 1){
       pontuacao++
     }
     console.log();

     let pergunta2 = prompt('voce tem beber em casa?');
     if(pergunta2 == 1){
       pontucao++
     }
     console.log();

     let pergunta3 = prompt('voce trabalha?');
     if(pergunta3 == 1){
       pontuacao++
     }
     console.log();

     let pergunta4 = prompt('voce ja tem antecedente criminal?');
     if(pergunta4 == 1){
       pontuacao++
     }
     console.log();

     let pergunta5 = prompt('voce ja foi preso?');
     if(pergunta5 == 1){
       pontuacao++
     }
     console.log();

     if(pontuacao == 0){
       console.log('voce falhou miseravelmente');
     }
     console.log();

     if(pontuacao== 0 || pontuacao == 1 || pontuacao == 2){
       console.log('voce e inocente');
     }
     console.log();

    if(pontuacao == 3){
      console.log('voce e suspeito');
    }
    console.log();

    if(pontuacao == 4 || pontuacao == 5){
      console.log('voce e culpado');
    }
    
    