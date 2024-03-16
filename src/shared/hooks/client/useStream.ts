import { useEffect, useState } from 'react'

type UseStreamProps = {
  symbol: string
}

type StreamItem = {
  timestamp: number
  open: number
  close: number
  high: number
  low: number
}

export function useStream({ symbol }: UseStreamProps) {
  const [streamData, setStreamData] = useState<StreamItem[]>([])
  const [isInitialLoading, setisInitialLoading] = useState(true)

  useEffect(() => {
    const ws = new WebSocket('wss://stream.binance.com:9443/ws')

    const URL_PARAMS = `${symbol}usdt@kline_1h`

    ws.onopen = () => {
      const message = JSON.stringify({
        method: 'SUBSCRIBE',
        params: [URL_PARAMS],
        id: 1,
      })

      ws.send(message)

      setisInitialLoading(false)
    }

    ws.onmessage = (e) => {
      const message = JSON.parse(e.data)
      const { t, o, c, h, l } = message.k

      const newDataPoint: StreamItem = {
        timestamp: t ?? 1710539999999,
        open: parseFloat(o),
        close: parseFloat(c),
        high: parseFloat(h),
        low: parseFloat(l),
      }

      setStreamData((currentData) => {
        const newData = [...currentData, newDataPoint]

        if (newData.length > 18) {
          return newData.slice(newData.length - 18)
        }

        return newData
      })
    }

    ws.onerror = (e) => {
      console.log('WebSocket error:', e)
    }

    return () => {
      if (ws) {
        ws.close()
      }
    }
  }, [symbol])

  return { streamData, isInitialLoading }
}
