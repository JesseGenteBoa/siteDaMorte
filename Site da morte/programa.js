let idade, fatorDeSorte, mensagem

idade = parseFloat(prompt("Qual é a sua idade?"))

fatorDeSorte = parseInt(Math.random() * 7)

if(idade <= 30){
    switch (fatorDeSorte) {
        case 1:
            mensagem = "Você estaria na metade do caminho ainda, mas... é uma pena que vai ser só isso mesmo, amigo, você morre ainda esse ano."
            break
        case 2:
            mensagem = "Que belo pênis, em, companheiro. Ainda vais tankar uns bons 20 aninhos aí."
            break
        case 3:
            mensagem = "Pau no cu de todas as pessoas que desejeram seu fim. Eles são uns canalhas!.. mas.. infelizmente eles teram seu desejo atendido, você morre amanhã mesmo."
            break
        case 4:
            mensagem = "Que honra, meu bom companheiro. Ainda terás mais 60 anos nesse planeta! Lembre-se, seus ultimos anos serão caóticos devido o aquecimento global."
            break
        case 5:
            mensagem = "Deus te espera com os portões abertos, meu guerreirinho, semana que vem tu se encontrarás com o criador."
            break
        case 6:
            mensagem = "Dou mais cinco anos pro cigarro te matar."
            break
        case 7:
            mensagem = "Se um fusca não te atropelar até março de 2031, eu te atropelo."
            break
    }
}
else if(idade >= 31 && idade <= 75){
    switch (fatorDeSorte) {
        case 1:
            mensagem = "Você se meteu numa grande encrenca, cara, se pá que de sexta-feira não passa."
            break
        case 2:
            mensagem = "Aparentemente, deu bom, caso seja isso que você deseje, terás ainda mais uns anos na terra... O suficiente, não se preocupe."
            break
        case 3:
            mensagem = "Parece que tantos anos enchendo o cu de maconha só podia dar em mau de Alzheimer. Tu não passa de dois anos."
            break
        case 4:
            mensagem = "Ah, ti fudê!"
            break
        case 5:
            mensagem = "Espera! Houve um equívoco da parte divina, parece que vc já deveria estar morto!!!"
            break
        case 6:
            mensagem = "Não sei, algo me diz que se pá mais 7 anos."
            break
        case 7:
            mensagem = "Deus revelou-me a mim, e eis que eu te digo, varão, você nunca morrerá! Repito você é um ser imortal!"
            break
    }
}
else if(idade >= 76 && idade <= 150){
    switch (fatorDeSorte) {
        case 1:
            mensagem = "Já tá com o pé na cova, né, parceiro. É a vida, nã tem jeito... Terás mais 3 anos, segundo meus calculos. "
            break
        case 2:
            mensagem = "Segundo a minha palavra, eu lhe falo, a vida tem reservado anos pra ti, um total de 2 ao quadrado."
            break
        case 3:
            mensagem = "Tá no bico do corvo, em... que situação paia, em, recruta, nessa idade tendo que passar por essas merda, vais viver mais 3 dias, apenas, sinto muito."
            break
        case 4:
            mensagem = "Tu foi cuzão, tu sabe disso, agradece porque alguém decidiu te dar mais 5 aninhos de rolê terreno."
            break
        case 5:
            mensagem = "Que díficil dizer isso, parece que tu ainda vai ter que aguentar mais uma década. Que pesadelo!"
            break
        case 6:
            mensagem = "Pra você, que está com essa idade toda, ti prepare porque ainda vêm mais 7 anos tortuosos pelo caminho."
            break
        case 7:
            mensagem = "Desse sorte, amigo, mais três dias e você descansa."
            break
    }
}
document.getElementById("Idade").innerHTML = "Tu tem " + idade + " anos."
document.getElementById("Mensagem").innerHTML = mensagem

    