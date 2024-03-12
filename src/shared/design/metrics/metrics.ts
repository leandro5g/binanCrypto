import { RFValue } from 'app/shared/libs/font-size/font-size'
import { Dimensions } from 'react-native'

const { height, width } = Dimensions.get('screen')

export const METRICS = {
  GLOBAL: {
    height,
    width,
  },
  FONT_SIZE: {
    SM: RFValue(12),
    MD: RFValue(14),
    LG: RFValue(18),
    XL: RFValue(24),
  },
  ICONS: {
    MD: RFValue(28),
  },
  PADDING: {
    MD: RFValue(24),
  },
}

export type METRICS_TYPE = typeof METRICS
