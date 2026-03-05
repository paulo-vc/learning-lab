class heroi{
  constructor(nome, idade, tipo){
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  ataque(){
    let tipoAtaque;
    if(this.tipo == "mago"){
     tipoAtaque = "magia";
    }else if(this.tipo == "guerreiro"){
      tipoAtaque = "espada";
    }else if(this.tipo == "monge"){
      tipoAtaque = "artes marciais"
    }else{
      tipoAtaque = "shuriken"
    }
    console.log(`O ${this.tipo} atacou usando ${tipoAtaque}`);
  }
}

const Heroi = new heroi("Carlos", 23, "mago")
Heroi.ataque();
