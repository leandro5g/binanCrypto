import { useEffect } from 'react'

import { ICONS_ID_MAP } from 'app/shared/config/constants/icons-id-map'

import { useWebSocket } from 'app/shared/hooks/client/useWebSocket'
import { useCryptoPricesStore } from 'app/modules/home/stores/useCryptoPricesStore'

import { hocList } from 'app/shared/components/hocs/hoc-list/hoc-list.component'
import { CardCrypto } from 'app/modules/home/components/cards/card-crypto/card-crypto.component'

import {
  AssetsCryptoResponse,
  getAssetsCryptoService,
} from 'app/modules/home/services/get-assets-crypto'

import { Container } from './list-cryptos.styles'

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
