let heroi = "Asura"
let nivelXp = 99999
let nivelDoHeroi 

if (nivelXp <= 1000){
    nivelDoHeroi = "Ferro"
} else if (nivelXp >= 1001 && nivelXp <= 2000){
    nivelDoHeroi = "Bronze"
} else if (nivelXp >= 2001 && nivelXp <= 5000){
    nivelDoHeroi = "Prata"
} else if (nivelXp >= 6001 && nivelXp <= 7000){
    nivelDoHeroi = "Ouro"
} else if (nivelXp >= 7001 && nivelXp <= 8000){
    nivelDoHeroi = "Platina"
} else if (nivelXp >= 8001 && nivelXp <= 9000){
    nivelDoHeroi = "Ascendente"
} else if (nivelXp >= 9001 && nivelXp <= 10000){
    nivelDoHeroi = "Imortal"
} else if (nivelXp >= 10000){
    nivelDoHeroi = "Radiante"
 } 
 
 console.log("O Heroi " + heroi + " está no Elo " + nivelDoHeroi)
