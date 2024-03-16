import { formatterDollar } from 'app/shared/utils/masks/formatter-dollar'
import { Container, PriceCrypto } from './value-modal-crypto.styles'
import { useCryptoPricesStore } from 'app/modules/home/stores/useCryptoPricesStore'

type ValueModalCryptoProps = {
  nameCripto: string
}

const ValueModalCrypto: React.FC<ValueModalCryptoProps> = ({ nameCripto }) => {
  const keyCripto = nameCripto?.toLowerCase()
  const [cryptoPrices] = useCryptoPricesStore((state) => [
    state.cryptoPrices?.[keyCripto],
  ])

  const parseCryptoPrice = parseFloat(cryptoPrices?.[cryptoPrices?.length - 1])

  return (
    <Container>
      <PriceCrypto variant="H2">
        {formatterDollar.format(parseCryptoPrice)}
      </PriceCrypto>
    </Container>
  )
}

export { ValueModalCrypto }
