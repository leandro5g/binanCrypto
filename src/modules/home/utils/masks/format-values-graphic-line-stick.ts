const DEFAULT_TIMESTAMP = 1625945400000

type FormatValuesGraphicLineStickProps = {
  cryptoPrices: string[]
  priceOpen: number
}

export function formatValuesGraphicLineStick({
  cryptoPrices,
  priceOpen,
}: FormatValuesGraphicLineStickProps) {
  const currentPrice = parseFloat(cryptoPrices?.[0] ?? '0')

  const INITIAL_DATA_GRAPHIC = [
    {
      value: priceOpen,
      timestamp: DEFAULT_TIMESTAMP,
    },
    {
      value: currentPrice,
      timestamp: DEFAULT_TIMESTAMP,
    },
  ]

  const formatedDataGraphic = cryptoPrices?.map((price) => ({
    value: parseFloat(price),
    timestamp: DEFAULT_TIMESTAMP,
  }))

  return formatedDataGraphic?.length > 1
    ? formatedDataGraphic
    : INITIAL_DATA_GRAPHIC
}
