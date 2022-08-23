// ARRAY INVERTIDO

let grupoDeAmigos = ["Gustavo", "João", "Paulo"];
grupoDeAmigos.reverse();
console.log(grupoDeAmigos);

//inverter

let inverter = grupoDeAmigos.reverse();
console.log(grupoDeAmigos);


//SOMAR

let somarArray = [1, 2, 3, 4];
let somar = 0;
for (let i = 0; i < somarArray.length; i++) {
  somar += somarArray[i];
}
console.log(somar);

const arr = [1, 2, 3, -4];
const reducer = (accumulator, curr) => accumulator + curr;
console.log(arr.reduce(reducer));


//ARRAY.JOIN

let juntar = ["o", "l", "á"];
let juntar1 = ["t", "c", "h", "a", "u"];
console.log(juntar.join("") + " " + juntar1.join(""));


//COLEÇÕES DE FILMES

var filmes = ["star wars", "matrix", "mr. robot", "o preço do amanhã", "a vida é bela"];
var animacao = ["Toy Story", "Procurando Nemo", "Kung-fu Panda", "Wally", "Fortnite"];
var retirarJogo = animacao.pop();
var maiuscula = filmes.map(p => p.toUpperCase());
var agrupar = filmes.concat(animacao);
console.log(maiuscula);
console.log(agrupar);


//compara score

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
console.log(asiaScores === euroScores)

