import { LineChart } from 'react-native-wagmi-charts'
import { RFValue } from 'app/shared/libs/font-size/font-size'
import { useTheme } from 'styled-components/native'

import { formatValuesGraphicLineStick } from 'app/modules/home/utils/masks/format-values-graphic-line-stick'

import { Container } from './line-stick-chart.styles'

type LineStickChartProps = {
  cryptoPrices: string[]
  priceOpen: number
}

const LineStickChart: React.FC<LineStickChartProps> = ({
  cryptoPrices,
  priceOpen,
}) => {
  const { METRICS } = useTheme()

  const dataGraphic = formatValuesGraphicLineStick({
    cryptoPrices,
    priceOpen,
  })

  return (
    <Container>
      {dataGraphic?.length >= 2 && (
        <LineChart.Provider data={dataGraphic}>
          <LineChart width={METRICS.GLOBAL.width * 0.2} height={RFValue(60)}>
            <LineChart.Path></LineChart.Path>
            <LineChart.CursorCrosshair>
              <LineChart.Tooltip />
            </LineChart.CursorCrosshair>
          </LineChart>
        </LineChart.Provider>
      )}
    </Container>
  )
}

export { LineStickChart }
