let resultado = saldoRanqueadas(90,4)
console.log(`O herói tem ${resultado} vitórias e está no Rank: ${verificarRank(resultado)}`);

function saldoRanqueadas(vitorias, derrotas){
  return vitorias - derrotas
}

function verificarRank(resultado){
  let rank
  if(resultado <= 10){
    rank = "Ferro"
  }else if(resultado <= 20){
    rank = "Bronze"
  }else if(resultado <= 50){
    rank = "Prata"
  }else if(resultado <= 80){
    rank = "Ouro"
  }else if(resultado <= 90){
    rank = "Diamante"
  }else if(resultado <= 100){
    rank = "Lendário"
  }else{
    rank = "Imortal"
  }
  return rank
