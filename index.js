// desafio lógica

let nomeHeroi = "Picachu"
let xpExperiencia = 1
const mensagem = "O Herói de nome " + nomeHeroi + " Esta no nível de "

for (let i = 0; i <= 5; i++) {
   
    let pontosGanhos = i + 3
    console.log( i + "+ " + 2 + " = " + pontosGanhos)
    xpExperiencia *=  pontosGanhos
   
    
}

console.log("XP Experiência: " + xpExperiencia.toLocaleString('pt-BR'));

if(xpExperiencia <= 1000){
    console.log(mensagem +" Ferro")
    
}
else if (xpExperiencia >= 1001 && xpExperiencia <= 2000 ) {
    console.log(mensagem +" Bronze") 
}

else if(xpExperiencia >= 2001 && xpExperiencia <= 5000){
    console.log(mensagem +"Prata")
}
else if(xpExperiencia >= 5001 && xpExperiencia <= 7000){
    console.log(mensagem +"Ouro")   
}
else if (xpExperiencia >= 7001 && xpExperiencia <=  8000 ) {
    console.log(mensagem + " Platina") 
} 
else if (xpExperiencia >=  8001 && xpExperiencia <=  9000) {
    console.log(mensagem + " Ascendente") 
} else if(xpExperiencia >= 9001 && xpExperiencia <= 10000) {
    console.log(mensagem + " Imortal") 
}  else {
    console.log(mensagem + "Radiante")
}


