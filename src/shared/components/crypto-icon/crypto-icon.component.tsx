import Bitcoin from 'app/shared/assets/cryptos-svg/btc.svg'

import { Container } from './crypto-icon.styles'
import { RFValue } from 'app/shared/libs/font-size/font-size'

const CryptoIcon: React.FC = () => {
  return (
    <Container>
      <Bitcoin height={RFValue(40)} width={RFValue(40)} />
    </Container>
  )
}

export { CryptoIcon }
