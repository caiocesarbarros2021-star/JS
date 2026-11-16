
console.log("JavaScript carregado!");

const nomeAluno = "Carlos";
let idade = 17;
const matriculado = true;

console.log("Nome:", nomeAluno);
console.log("Idade:", idade);
console.log("Matriculado:", matriculado);

console.log("Tipo do nome:", typeof nomeAluno);
console.log("Tipo da idade:", typeof idade);
console.log("Tipo de matriculado:", typeof matriculado);

let numero1 = 10;
let numero2 = 5;

console.log("Soma:", numero1 + numero2);
console.log("Subtração:", numero1 - numero2);
console.log("Multiplicação:", numero1 * numero2);
console.log("Divisão:", numero1 / numero2);
console.log("Resto:", numero1 % numero2);


console.log("Primeiro maior que o segundo:", numero1 > numero2);
console.log("São estritamente iguais:", numero1 === numero2);

const n1 = Number(prompt("Digite o primeiro número:"));
const n2 = Number(prompt("Digite o segundo número:"));

console.log("Soma dos valores:", n1 + n2);
console.log("Tipo de n1:", typeof n1);
console.log("Tipo de n2:", typeof n2);

let idadeUsuario = Number(prompt("Digite sua idade:"));

if (idadeUsuario >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}

let nota = Number(prompt("Digite sua nota de 0 a 100:"));

if (nota >= 90) {
    console.log("Excelente");
} else if (nota >= 70) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

let numero = Number(prompt("Digite um número inteiro:"));

if (numero % 2 === 0) {
    console.log("Número par");
} else {
    console.log("Número ímpar");
}


const idadeTeste = Number(prompt("Idade:"));

if (idadeTeste === 18) {
    console.log("Tem exatamente 18 anos");
} else {
    console.log("Idade diferente de 18");
}

console.log(idadeTeste);

const nome = prompt("Digite o nome do aluno:");
const nota1 = Number(prompt("Digite a primeira nota:"));
const nota2 = Number(prompt("Digite a segunda nota:"));

const media = (nota1 + nota2) / 2;

let situacao;

if (media >= 70) {
    situacao = "Aprovado";
} else {
    situacao = "Reprovado";
}

console.log(`Aluno: ${nome} | Média: ${media} | Situação: ${situacao}`);