/**
 * Faça um programa que receba o nome e idade do usuário e retorne:
 * - o nome do usuário;
 * - se ele é menor ou maior de idade;
*/
let nome = prompt("Digite seu nome:");
let idade = prompt("Digite sua idade:");
if(idade<18){
    alert(nome +" é menor de idade");
}
else{
    alert(nome +" é maior de idade");
}