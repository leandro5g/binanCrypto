import {
  CryptoIcon,
  CryptoKeyIcon,
} from 'app/shared/components/crypto-icon/crypto-icon.component'

import { Container, Content, SymbolsCrypto } from './info-crypto.styles'

type InfoCryptoProps = {
  name: string
  symbol: string
  id: string
}

const InfoCrypto: React.FC<InfoCryptoProps> = ({ name, symbol, id }) => {
  return (
    <Container>
      <CryptoIcon cryptoId={id as CryptoKeyIcon} />
      <Content>
        <SymbolsCrypto variant="H2" numberOfLines={1}>
          {name}
        </SymbolsCrypto>
        <SymbolsCrypto variant="P1">{symbol}</SymbolsCrypto>
      </Content>
    </Container>
  )
}

export { InfoCrypto }
