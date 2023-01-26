/**
 * faça um código que calcule a porcentagem de um número e retorne o valor encontrado:
 * o código deve:
 * - receber o valor total;
 * - receber a porcentagem (de 1 a 100);
 * - retornar o valor calculado;
*/
let numero = prompt("Digite o numero:");
let porcentagem = prompt("Digite a porcentagem:");
let result = numero * (porcentagem/100);
alert(`${porcentagem}% de ${numero} é ${result}`);
