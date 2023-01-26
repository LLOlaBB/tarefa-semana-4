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
let maiorSalario = trabalhadores[0];

for (let i = 1; i < trabalhadores.length; i++) {
  if (trabalhadores[i].salario_bruto > maiorSalario.salario_bruto) {
    maiorSalario = trabalhadores[i];
  }
}
alert(`O Empregado com maior salario é o ${maiorSalario.cargo} ${maiorSalario.nome} com salario de ${maiorSalario.salario_bruto}`);   