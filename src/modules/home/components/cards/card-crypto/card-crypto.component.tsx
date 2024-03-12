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

type CardCryptoProps = {
  data: CryptoModel
}

const CardCrypto: React.FC<CardCryptoProps> = ({ data }) => {
  return (
    <Container>
      <Content>
        <CryptoIcon cryptoId={data.id} />
        <ContainerNameCypto>
          <SymbolsCrypto variant="H2">{data?.name}</SymbolsCrypto>
          <SymbolsCrypto variant="P1">{data?.symbol}</SymbolsCrypto>
        </ContainerNameCypto>
      </Content>

      <LineChartCrypto />

      <ContainerPriceCypto>
        <SymbolsCrypto variant="H2">
          $ {parseFloat(data?.priceUsd ?? 0).toFixed(2)}
        </SymbolsCrypto>
        <CardPercentageCrypto />
      </ContainerPriceCypto>
    </Container>
  )
}

export { CardCrypto }
