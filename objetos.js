
/*coleção de dados (objetos)
const bruna = {
    nome: "Bruna Ciriaco",
    idade: 22,
    //metodo
    descreva: function() {
        console.log(`Meu nome é ${this.nome}`);
    }
};

/* inclusão de dados
bruna.altura = 1.59;

// deletando dados
delete bruna.idade;

bruna.nome = "teste de outro nome"
bruna.descreva(); 

console.log(bruna['nome'])*/

class Pessoa {
    nome;
    idade;
    sexo;

    constructor(nome,idade,sexo){
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
        this.anoDeNasc = 2022 - idade;
    }

    descreva(){
        console.log(`Meu nome é ${prop.nome}, minha idade é ${this.idade} e o meu sexo é ${this.sexo}`)
    }
}

function compararPessoa(p1,p2){
  if (p1.idade > p2.idade){
    console.log(`${p1.nome} é ${p1.idade - p2.idade} anos mais velha que ${p2.nome}`)
  }else if(p2.idade > p1.idade){
    console.log(`${p2.nome} é ${p2.idade - p1.idade} anos mais velha que ${p1.nome}`)
  }else{
    console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`)
  }
}
const bruna = new Pessoa('Bruna',22,'F')
const ronaldo = new Pessoa('Ronaldo',35,'M')

compararPessoa(bruna,ronaldo);