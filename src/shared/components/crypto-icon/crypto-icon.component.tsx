import Crypto from 'rn-crypto-icons-svg'

import { MAP_ICON } from 'app/shared/assets/cryptos-svg'
import { Container } from './crypto-icon.styles'
import { RFValue } from 'app/shared/libs/font-size/font-size'

type CryptoIconProps = {
  cryptoId: string
}

const CryptoIcon: React.FC<CryptoIconProps> = ({ cryptoId }) => {
  const Icon = MAP_ICON[cryptoId]

  return (
    <Container>
      {Icon && <Crypto height={RFValue(40)} width={RFValue(40)} />}
    </Container>
  )
}

export { CryptoIcon }
