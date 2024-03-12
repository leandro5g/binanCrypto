import { hocList } from 'app/shared/components/hocs/hoc-list/hoc-list.component'
import { CardCrypto } from '../../components/cards/card-crypto/card-crypto.component'

import {
  getAssetsCryptoService,
  AssetsCryptoResponse,
} from '../../services/get-assets-crypto'

import { Container } from './home.styles'

const Home: React.FC = () => {
  const ListCrypto = hocList<CryptoModel, AssetsCryptoResponse>({
    element: CardCrypto,
    fetcher: getAssetsCryptoService,
  })

  return <Container>{ListCrypto}</Container>
}

export { Home }
