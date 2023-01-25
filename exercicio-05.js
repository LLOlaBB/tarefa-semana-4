/**
 * Faça um programa que receba o mês e retorne o total de dias
 * 
 * janeiro = 31 dias
 * fevereiro = 28 dias
 * março = 31 dias
 * abril = 30 dias
 * maio = 31 dias
 * junho = 30 dias
 * julho = 31 dias
 * agosto = 31 dias
 * setembro = 30 dias
 * outubro = 31 dias
 * novembro = 30 dias
 * dezembro = 31 dias
*/
let mes = prompt("Digite o mês:");
switch (mes) {
    case "janeiro":
        alert(mes + " possui 31 dias");
        break;
    case "fevereiro":
        alert(mes + " possui 28 dias");
        break;
    case "março":
        alert(mes + " possui 31 dias");
        break;
    case "abril":
        alert(mes + " possui 30 dias");
        break;
    case "maio":
        alert(mes + " possui 31 dias");
        break;
    case "junho":
        alert(mes + " possui 30 dias");
        break;
    case "julho":
        alert(mes + " possui 31 dias");
        break;
    case "agosto":
        alert(mes + " possui 31 dias");
        break;
    case "setembro":
        alert(mes + " possui 30 dias");
        break;
    case "outubro":
        alert(mes + " possui 31 dias");
        break;
    case "novembro":
        alert(mes + " possui 30 dias");
        break;
    case "dezembro":
        alert(mes + " possui 31 dias");
        break;
    default:
        alert("Mês não encontrado.");
        break;
}