import { useStream } from 'app/shared/hooks/client/useStream'

import { BaseCandleStick } from './modules/base-candle-stick/base-candle-stick.module'

import { Container } from './candle-stick-chart.styles'
import { Loading } from 'app/shared/components/loading/loading/loading.component'

type CandleStickChartProps = {
  symbol: string
}

const CandleStickChart: React.FC<CandleStickChartProps> = ({ symbol }) => {
  const { streamData, isInitialLoading } = useStream({ symbol })

  return (
    <Container>
      {isInitialLoading && <Loading />}

      {!isInitialLoading && streamData?.length > 0 && (
        <BaseCandleStick data={streamData} />
      )}
    </Container>
  )
}

export { CandleStickChart }
