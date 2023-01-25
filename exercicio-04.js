/**
 * De acordo com o exercício anterior (calcular média da nota), valide e retorne a situação do aluno:
 * - se a média for <= 1, retorne “Aluno reprovado”;
 * - se a média for >= 2 e <= 4, retorne “Aluno em recuperação”;
 * - se a média for >= 5 e <= 7, retorne “Aluno aprovado”;
 * - se a média for > 7, retorne “Aluno aprovado com ótimo aproveitamento”;
*/
let numero1 = prompt("Digite o primeiro numero:");
let numero2 = prompt("Digite o segundo numero:");
let numero3 = prompt("Digite o terceiro numero:");
let result = (parseInt(numero1)+parseInt(numero2)+parseInt(numero2))/3;
if(result<=1){
    alert("Aluno Reprovado com nota: " + result);
}
else if(result>=1 && result<=4){
    alert("Aluno em recuperação com nota: " + result);
}
else if(result>=5 && result<=7){
    alert("Aluno aprovado com nota: " + result);
}
else if(result>7){
    alert("Aluno aprovado com ótimo aproveitamento com nota: " + result);
}

