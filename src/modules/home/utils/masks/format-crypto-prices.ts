export function formatCryptoPrices(updates: CryptoPrice[]): CryptoPrices {
  const result: CryptoPrices = {}

  updates.forEach((update) => {
    Object.entries(update).forEach(([crypto, price]) => {
      if (!result[crypto]) {
        result[crypto] = []
      }
      if (result[crypto][result[crypto].length - 1] !== price) {
        result[crypto].push(price)
      }
      result[crypto] = result[crypto].slice(-4)
    })
  })

  return result
}
