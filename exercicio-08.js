/**
 * faça um algoritmo que receba um número entre 1 e 21 e retorne o fatorial
 * 
*/
let numero = prompt("Digite um numero entre 1 e 21:");
if(numero >=1 && numero <=21){
let fatorial = numero;
let i = numero;
while (i>1){
    i--;
    fatorial *= i;
}
alert(`O fatorial de ${numero} é ${fatorial}`);
}
else{
    alert("Numero fora do escopo.");  
}