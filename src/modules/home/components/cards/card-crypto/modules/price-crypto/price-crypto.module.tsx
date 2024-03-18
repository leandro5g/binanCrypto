import { calcVariationPercentage } from 'app/modules/home/utils/calcs/calc-variation-percentage'
import { maskDollar } from 'app/shared/utils/masks/mask-dollar'

import { TextDefault } from 'app/shared/components/texts/text-default/text-default.component'
import { CardPercentageCrypto } from '../../../card-percentage-crypto/card-percentage-crypto.component'

import { Container } from './price-crypto.styles'

type PriceCryptoProps = {
  prices: string[]
  changePercentage: string
}

const PriceCrypto: React.FC<PriceCryptoProps> = ({
  prices,
  changePercentage,
}) => {
  const newPrice = prices?.[prices.length - 1]
  const parsedNewPrice = parseFloat(newPrice)

  const oldPrice = prices?.[prices.length - 2]
  const parsedOldPrice = parseFloat(oldPrice)

  const variantPercentage = calcVariationPercentage({
    initialPercentage: changePercentage,
    newPrice,
    oldPrice,
  })

  return (
    <Container>
      <TextDefault variant="H2">{maskDollar(newPrice)}</TextDefault>
      <CardPercentageCrypto
        hasIncreased={parsedNewPrice > parsedOldPrice}
        hasKeep={parsedNewPrice === parsedOldPrice}
        variantPercentage={variantPercentage}
      />
    </Container>
  )
}

export { PriceCrypto }
