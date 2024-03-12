import { CryptoIcon } from 'app/shared/components/crypto-icon/crypto-icon.component'
import { LineChartCrypto } from '../../graphics/line-chart-crypto/line-chart-crypto.component'
import { CardPercentageCrypto } from '../card-percentage-crypto/card-percentage-crypto.component'

import {
  Container,
  Content,
  SymbolsCrypto,
  ContainerPriceCypto,
  ContainerNameCypto,
} from './card-crypto.styles'

const CardCrypto: React.FC = () => {
  return (
    <Container>
      <Content>
        <CryptoIcon />
        <ContainerNameCypto>
          <SymbolsCrypto variant="H2">Bitcoin</SymbolsCrypto>
          <SymbolsCrypto variant="P1">BTC</SymbolsCrypto>
        </ContainerNameCypto>
      </Content>

      <LineChartCrypto />

      <ContainerPriceCypto>
        <SymbolsCrypto variant="H2">R$ 10.569,00</SymbolsCrypto>
        <CardPercentageCrypto />
      </ContainerPriceCypto>
    </Container>
  )
}

export { CardCrypto }
