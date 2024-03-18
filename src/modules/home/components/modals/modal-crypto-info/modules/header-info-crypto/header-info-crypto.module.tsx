import { FadeInUp } from 'react-native-reanimated'

import {
  CryptoIcon,
  CryptoKeyIcon,
} from 'app/shared/components/crypto-icon/crypto-icon.component'
import { ValueModalCrypto } from '../value-modal-crypto/value-modal-crypto.component'

import {
  Container,
  Content,
  CryptoName,
  ContainerIconCrypto,
} from './header-info-crypto.styles'

type HeaderInfoCryptoProps = {
  data: CryptoModel
}

const HeaderInfoCrypto: React.FC<HeaderInfoCryptoProps> = ({ data }) => {
  return (
    <Container entering={FadeInUp.delay(200).duration(500)}>
      <Content>
        <CryptoIcon size="LG" cryptoId={data?.id as CryptoKeyIcon} />
        <ContainerIconCrypto>
          <CryptoName variant="H2">{data?.name}</CryptoName>
          <CryptoName variant="P1">{data?.symbol}</CryptoName>
        </ContainerIconCrypto>
      </Content>

      <ContainerIconCrypto style={{ alignItems: 'flex-end' }}>
        <ValueModalCrypto nameCripto={data?.name} />
        <CryptoName variant="P1">
          {parseFloat(data?.supply).toFixed(2)}
        </CryptoName>
      </ContainerIconCrypto>
    </Container>
  )
}

export { HeaderInfoCrypto }
