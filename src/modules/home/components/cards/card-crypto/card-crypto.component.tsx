import { useCallback, useRef } from 'react'

import { calcOpenPrice } from 'app/modules/home/utils/calcs/calc-open-price'
import { useCryptoPricesStore } from 'app/modules/home/stores/useCryptoPricesStore'

import { ModalCryptoInfo } from '../../modals/modal-crypto-info/modal-crypto-info.component'
import { BaseModalRef } from 'app/shared/components/modals/base-modal/base-modal.component'
import { InfoCrypto } from './modules/info-crypto/info-crypto.module'
import { PriceCrypto } from './modules/price-crypto/price-crypto.module'
import { LineStickChart } from '../../graphics/line-stick-chart/line-stick-chart.component'

import { Container } from './card-crypto.styles'

type CardCryptoProps = {
  data: CryptoModel
}

const CardCrypto: React.FC<CardCryptoProps> = ({ data }) => {
  const keyCrypto = data?.name.toLowerCase()
  const initialPrice = data?.priceUsd ?? '0'

  const [cryptoPrices] = useCryptoPricesStore((state) => [
    state.cryptoPrices?.[keyCrypto],
  ])

  const priceOpen = calcOpenPrice({
    currentPrice: initialPrice,
    percentageChange: data?.changePercent24Hr,
  })

  const prices = cryptoPrices ? [initialPrice, ...cryptoPrices] : [initialPrice]

  const refModalCryptoInfo = useRef<BaseModalRef>(null)

  const onPressCardCrypto = useCallback(() => {
    refModalCryptoInfo.current?.toggleModal()
  }, [])

  return (
    <Container onPress={onPressCardCrypto}>
      <InfoCrypto id={data?.id} name={data?.name} symbol={data?.symbol} />
      <LineStickChart priceOpen={priceOpen} cryptoPrices={cryptoPrices} />
      <PriceCrypto prices={prices} changePercentage={data?.changePercent24Hr} />
      <ModalCryptoInfo ref={refModalCryptoInfo} />
    </Container>
  )
}

export { CardCrypto }
