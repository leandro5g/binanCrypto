type CalcOpenPriceProps = {
  currentPrice: string
  percentageChange: string
}

export function calcOpenPrice({
  currentPrice,
  percentageChange,
}: CalcOpenPriceProps): number {
  const parsePercentageChange = parseFloat(percentageChange)
  const parseCurrentPrice = parseFloat(currentPrice)

  const parseDecimals = parsePercentageChange / 100

  const openPrice = parseCurrentPrice / (1 + parseDecimals)

  return openPrice
}
