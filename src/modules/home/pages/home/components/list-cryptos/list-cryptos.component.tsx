import { hocList } from 'app/shared/components/hocs/hoc-list/hoc-list.component'
import {
  AssetsCryptoResponse,
  getAssetsCryptoService,
} from 'app/modules/home/services/get-assets-crypto'
import { CardCrypto } from 'app/modules/home/components/cards/card-crypto/card-crypto.component'

import { Container } from './list-cryptos.styles'
import { useWebSocket } from 'app/shared/hooks/client/useWebSocket'
import { useEffect } from 'react'
import { useCryptoPricesStore } from 'app/modules/home/stores/useCryptoPricesStore'
import { ICONS_ID_MAP } from 'app/shared/config/constants/icons-id-map'

const ListCryptos: React.FC = () => {
  const [onCryptoPrices] = useCryptoPricesStore((state) => [
    state.onCryptoPrices,
  ])

  const { messages } = useWebSocket<CryptoPrice>({
    urlConnect: `wss://ws.coincap.io/prices?assets=${ICONS_ID_MAP.toString()}`,
  })

  useEffect(() => {
    onCryptoPrices(messages)
  }, [messages])

  const ListCrypto = hocList<CryptoModel, AssetsCryptoResponse>({
    element: CardCrypto,
    fetcher: getAssetsCryptoService,
  })
  return <Container>{ListCrypto}</Container>
}

export { ListCryptos }
