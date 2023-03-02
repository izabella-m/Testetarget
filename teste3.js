const mensal = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};
const totalFaturamento = Object.values(mensal).reduce(
  (acumulador, valor) => acumulador + valor
);
const percentuais = {};
for (const estado in faturamentoMensal) {
  percentuais[estado] = (mensal[estado] / totalFaturamento) * 100;
}
console.log(percentuais);
