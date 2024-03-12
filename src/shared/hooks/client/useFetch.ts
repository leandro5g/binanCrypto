import { useQuery } from '@tanstack/react-query'
import { axiosClient } from 'app/shared/clients/axios/axios-client'

type UseFetcherProps = {
  url: string
}

export function useFetcher<R>({ url }: UseFetcherProps) {
  return useQuery<R, Error>({
    queryKey: [url],
    queryFn: () => axiosClient({ method: 'get', url }),
  })
}
