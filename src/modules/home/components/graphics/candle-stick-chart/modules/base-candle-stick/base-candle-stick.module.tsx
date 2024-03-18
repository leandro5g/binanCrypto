import { FadeInUp } from 'react-native-reanimated'
import { CandlestickChart, TData } from 'react-native-wagmi-charts'
import { useTheme } from 'styled-components/native'

import { Container } from './base-candle-stick.styles'

type BaseCandleStickProps = {
  data: TData
}

const BaseCandleStick: React.FC<BaseCandleStickProps> = ({ data }) => {
  const { METRICS } = useTheme()

  return (
    <Container entering={FadeInUp.duration(600)}>
      <CandlestickChart.Provider data={data}>
        <CandlestickChart height={METRICS.GLOBAL.height * 0.22}>
          <CandlestickChart.Candles />
          <CandlestickChart.Crosshair>
            <CandlestickChart.Tooltip />
          </CandlestickChart.Crosshair>
        </CandlestickChart>
      </CandlestickChart.Provider>
    </Container>
  )
}

export { BaseCandleStick }
