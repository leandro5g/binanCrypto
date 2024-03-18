import { LineChart } from 'react-native-wagmi-charts'
import { RFValue } from 'app/shared/libs/font-size/font-size'
import { useTheme } from 'styled-components/native'

import { formatValuesGraphicLineStick } from 'app/modules/home/utils/masks/format-values-graphic-line-stick'

import { Container } from './line-stick-chart.styles'
import { CRYPTO_TINT_COLOR } from 'app/shared/config/constants/crypto-tint-color'

type LineStickChartProps = {
  cryptoPrices: string[]
  priceOpen: number
  cryptoId: string
}

const LineStickChart: React.FC<LineStickChartProps> = ({
  cryptoPrices,
  priceOpen,
  cryptoId,
}) => {
  const { METRICS, COLORS } = useTheme()

  const colorGraphic =
    CRYPTO_TINT_COLOR?.[cryptoId as keyof typeof CRYPTO_TINT_COLOR] ??
    COLORS.BRAND[100]

  const dataGraphic = formatValuesGraphicLineStick({
    cryptoPrices,
    priceOpen,
  })

  return (
    <Container>
      {dataGraphic?.length >= 2 && (
        <LineChart.Provider data={dataGraphic}>
          <LineChart width={METRICS.GLOBAL.width * 0.2} height={RFValue(60)}>
            <LineChart.Path color={colorGraphic}></LineChart.Path>
            <LineChart.CursorCrosshair>
              <LineChart.Tooltip></LineChart.Tooltip>
            </LineChart.CursorCrosshair>
          </LineChart>
        </LineChart.Provider>
      )}
    </Container>
  )
}

export { LineStickChart }
