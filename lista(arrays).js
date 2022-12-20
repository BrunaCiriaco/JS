
//1) Crie um programa que dado um número imprima a sua tabuada.

/*const tabu = 5
for (let i = 1; i <= 10 ; i++){
    let numero = i * tabu ;
    console.log(`${i} * ${tabu} = ${numero}`)
}*/

//2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.
/*const numeros = [12,78,21,9,1,4,6]
for (let i = 0; i < numeros.length ; i++){
    const par =  numeros[i] 
    if (numeros[i] % 2 === 0){
       console.log(`${par} é par`) 
    }else{
        console.log('impar')
    }
    
}*/


//3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".

/*const objetos = ['vassora', 'chuveiro', ' banco', 'bandeira', 'vara', 'varal', 'vareta',]
for (let i = 0; i <= objetos.length; i++){
    let letras = objetos[i] || [];
    if (letras[0] === 'v'){
        console.log(`${letras}`)
    }else{
        console.log('não possui inicial V')
    }
}*/


//4) Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;
/*
const t = []
for (let i = 10 ; i <= 50; i++){
   let par = i
   let total = par % 2;
   if ( total === 0){
    console.log(`par ${i}`)
   }else{
     console.log()
   }
}*/

console.log (1 % 2)


//5) Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 5).
//Ex de lista = [2, 7, 3, 8, 10, 4]
/*const lista = [{'nome':'bruna', 'idade': 22},{'nome': 'Ronaldo', 'idade':34}]
  const teste = lista.map((user)=>{
    return user.nome
  })
console.log(teste)
*/
/*6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
   Ex de lista de notas = [2, 7, 3, 8, 10, 4] */