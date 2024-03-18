import { useStream } from 'app/shared/hooks/client/useStream'

import { BaseCandleStick } from './modules/base-candle-stick/base-candle-stick.module'
import { Loading } from 'app/shared/components/loading/loading/loading.component'
import { WaitingData } from './modules/waiting-data/waiting-data.module'

import { Container } from './candle-stick-chart.styles'

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

      {!isInitialLoading && streamData?.length < 1 && <WaitingData />}
    </Container>
  )
}

export { CandleStickChart }
