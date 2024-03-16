export function maskDollar(price: number, minimumFractionDigits = 2) {
  const formatterDollar = new Intl.NumberFormat('pt-BR', {
    // Usando 'pt-BR' como exemplo; ajuste conforme necessário
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits,
  })

  return formatterDollar.format(price)
}
