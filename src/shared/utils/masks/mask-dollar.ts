export function maskDollar(price = '0', minimumFractionDigits = 2) {
  const parsedValue = parseFloat(price)

  const formatterDollar = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits,
  })

  return formatterDollar.format(parsedValue)
}
