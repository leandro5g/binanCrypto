import { useEffect, useState } from 'react'

type UseWebSocketProps = {
  urlConnect: string
}

export function useWebSocket<T>({ urlConnect }: UseWebSocketProps) {
  const [messages, setMessages] = useState<T[]>([])
  const [errorSocket, setErrorSocket] = useState(false)
  const [loadingSocket, setLoadingSocket] = useState(false)

  const ws = new WebSocket(urlConnect)

  useEffect(() => {
    ws.onopen = () => {
      setErrorSocket(false)
      setLoadingSocket(true)
    }

    ws.onmessage = (e) => {
      const message = JSON.parse(e?.data)

      setMessages((oldMessages) => [...oldMessages, message])
    }

    ws.onerror = () => {
      setErrorSocket(true)
    }

    return () => {
      ws.close()
    }
  }, [ws])

  return { messages, errorSocket, loadingSocket }
}
