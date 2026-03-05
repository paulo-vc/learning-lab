let nomeHeroi = 'Poru';
let expHeroi = 5001;
let classificacao;

if (expHeroi <= 1000) {
    classificacao = 'Ferro';
} else if (expHeroi >= 1001 && expHeroi <= 2000) {
    classificacao = 'Bronze';
} else if (expHeroi >= 2001 && expHeroi <= 5000) {
    classificacao = 'Prata';
} else if (expHeroi >= 5001 && expHeroi <= 7000) {
    classificacao = 'Ouro';
} else if (expHeroi >= 7001 && expHeroi <= 8000) {
    classificacao = 'Platina';
} else if (expHeroi >= 8001 && expHeroi <= 9000) {
    classificacao = 'Ascendente';
} else if (expHeroi >= 9001 && expHeroi <= 10000) {
    classificacao = 'Imortal';
} else {
    classificacao = 'Radiante';
}

console.log(`O Herói de nome ${nomeHeroi} está no nível de ${classificacao}`);