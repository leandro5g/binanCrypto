import { useEffect, useState } from 'react'

type UseWebSocketProps = {
  urlConnect: string
}

export function useWebSocket<T>({ urlConnect }: UseWebSocketProps) {
  const [messages, setMessages] = useState<T[]>([])
  const [errorSocket, setErrorSocket] = useState(false)
  const [loadingSocket, setLoadingSocket] = useState(false)

  useEffect(() => {
    let batchedMessages: T[] = []

    const flushMessages = () => {
      setMessages((oldMessages) => [...oldMessages, ...batchedMessages])
      batchedMessages = []
    }

    const ws = new WebSocket(urlConnect)

    ws.onopen = () => {
      setErrorSocket(false)
      setLoadingSocket(true)
    }

    const handleMessage = (event: MessageEvent<string>) => {
      batchedMessages.push(JSON.parse(event.data))
    }

    ws.onmessage = handleMessage

    ws.onerror = () => {
      setErrorSocket(true)
    }

    const interval = setInterval(flushMessages, 4000)

    return () => {
      clearInterval(interval)
      ws.close()
    }
  }, [])

  return { messages, errorSocket, loadingSocket }
}
