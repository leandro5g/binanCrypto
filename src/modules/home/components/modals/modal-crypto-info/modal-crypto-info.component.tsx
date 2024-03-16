import { forwardRef } from 'react'

import {
  BaseModal,
  BaseModalRef,
} from 'app/shared/components/modals/base-modal/base-modal.component'

import { CandleStickChart } from '../../graphics/candle-stick-chart/candle-stick-chart.component'
import { HeaderInfoCrypto } from './modules/header-info-crypto/header-info-crypto.module'
import { DescriptionGraphic } from './modules/description-graphic/description-graphic.module'

import { Container } from './modal-crypto-info.styles'

type ModalCryptoInfoProps = {
  data: CryptoModel
}

const ModalCryptoInfo = forwardRef<BaseModalRef, ModalCryptoInfoProps>(
  ({ data }, refBaseModal) => {
    return (
      <BaseModal ref={refBaseModal}>
        <Container>
          <HeaderInfoCrypto data={data} />

          <CandleStickChart symbol={data?.symbol?.toLowerCase()} />

          <DescriptionGraphic />
        </Container>
      </BaseModal>
    )
  },
)

export { ModalCryptoInfo }
