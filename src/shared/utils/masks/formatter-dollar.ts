export const formatterDollar = new Intl.NumberFormat('pt-BR', {
  // Usando 'pt-BR' como exemplo; ajuste conforme necessário
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
})
