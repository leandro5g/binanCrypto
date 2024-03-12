import { LineChart } from 'react-native-chart-kit'

import { Container } from './line-chart-crypto.styles'
import { RFValue } from 'app/shared/libs/font-size/font-size'

const LineChartCrypto: React.FC = () => {
  return (
    <Container>
      <LineChart
        withHorizontalLabels={false}
        withVerticalLabels={false}
        withHorizontalLines={false}
        withDots={false}
        withInnerLines={false}
        withShadow={true}
        withOuterLines={false}
        data={{
          datasets: [{ data: [10, 20, 10, 40, 50, 60, 40] }],
          labels: [],
        }}
        width={RFValue(70)}
        height={RFValue(55)}
        chartConfig={{
          color: () => '#F6543E',
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          fillShadowGradientFromOpacity: 0.1,
          fillShadowGradientToOpacity: 0.1,
        }}
        bezier
        style={{
          paddingRight: 0,
          paddingTop: RFValue(4),
          padding: 0,
          paddingBottom: 0,
          backgroundColor: 'transparent',
        }}
      />
    </Container>
  )
}

export { LineChartCrypto }
