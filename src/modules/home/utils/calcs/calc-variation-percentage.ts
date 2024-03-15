type CalcVariationPercentageProps = {
  oldPrice: string
  newPrice: string
  initialPercentage: string
}
export function calcVariationPercentage({
  initialPercentage,
  newPrice,
  oldPrice,
}: CalcVariationPercentageProps): string {
  if (!newPrice || !oldPrice) return parseFloat(initialPercentage).toFixed(6)

  console.log(oldPrice)

  const newPriceParsed = parseFloat(newPrice)
  const oldPriceParsed = parseFloat(oldPrice)
  const variation = (newPriceParsed - oldPriceParsed) / oldPriceParsed
  console.log({
    variation,
    oldPrice,
    newPrice,
  })
  const resultVariation = variation * 100

  return resultVariation.toFixed(6)
}
