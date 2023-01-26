/**
 * faça um código que retorne o nome e cargo do trabalhador com maior salário, use o array de objetos abaixo
*/

const trabalhadores = [
	{
		nome: "José",
		salario_bruto: 3950.23,
		cargo: "Analista de sistemas jr",
	},
	{
		nome: "Maria",
		salario_bruto: 5900,
		cargo: "Analista de sistemas pleno",
	},
	{
		nome: "João",
		salario_bruto: 2500,
		cargo: "estagiário",
	},
	{
		nome: "Sérgio",
		salario_bruto: 3951.50,
		cargo: "Consultor financeiro",
	},
];
var empregado = [];
for (let i = 0; i <trabalhadores.length; i++) { 
	
	for (let j = 0; j <trabalhadores.length; j++){
		var maiorSalario = trabalhadores[i].salario_bruto;
		if (trabalhadores[j].salario_bruto>=maiorSalario){
			empregado[0] = trabalhadores[j];
		}
	}
}
alert(`O Empregado com maior salario é o ${empregado[0].cargo} ${empregado[0].nome} com salario de ${empregado[0].salario_bruto}`);  