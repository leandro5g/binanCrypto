import { useCryptoPricesStore } from 'app/modules/home/stores/useCryptoPricesStore'
import { useTheme } from 'styled-components/native'

import { maskDollar } from 'app/shared/utils/masks/mask-dollar'

import { Container, PriceCrypto } from './value-modal-crypto.styles'

type ValueModalCryptoProps = {
  nameCripto: string
}

const ValueModalCrypto: React.FC<ValueModalCryptoProps> = ({ nameCripto }) => {
  const { COLORS } = useTheme()

  const keyCripto = nameCripto?.toLowerCase()
  const [cryptoPrices] = useCryptoPricesStore((state) => [
    state.cryptoPrices?.[keyCripto],
  ])

  const priceCrypto = cryptoPrices?.[cryptoPrices?.length - 1]
  const parseCryptoPrice = parseFloat(priceCrypto)
  const parseLastCryptoPrice = parseFloat(
    cryptoPrices?.[cryptoPrices?.length - 2],
  )

  const hasIncreased = parseCryptoPrice > parseLastCryptoPrice

  const colorPrice = hasIncreased
    ? COLORS.GRAPHIC_COLOR.INCREASED
    : COLORS.GRAPHIC_COLOR.DECREASED

  return (
    <Container>
      <PriceCrypto style={{ color: colorPrice }} variant="H2">
        {maskDollar(priceCrypto, 6)}
      </PriceCrypto>
    </Container>
  )
}

export { ValueModalCrypto }
