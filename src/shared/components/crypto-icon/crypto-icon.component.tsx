import { RFValue } from 'app/shared/libs/font-size/font-size'

import { MAP_ICON } from 'app/shared/assets/cryptos-svg'

export type CryptoKeyIcon = keyof typeof MAP_ICON

type CryptoIconProps = {
  cryptoId: CryptoKeyIcon
  size?: 'MD' | 'LG'
}

const ICON_SIZE = {
  MD: RFValue(40),
  LG: RFValue(48),
}

const CryptoIcon: React.FC<CryptoIconProps> = ({ cryptoId, size = 'MD' }) => {
  const Icon = MAP_ICON[cryptoId]

  if (!Icon) return null

  return <Icon width={ICON_SIZE[size]} height={ICON_SIZE[size]} />
}

export { CryptoIcon }
