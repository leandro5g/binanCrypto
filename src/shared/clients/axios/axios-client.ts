import { axiosInstance } from 'app/shared/libs/axios/client'

type AxiosClientProps = {
  method?: 'get' | 'post' | 'put'
  url: string
}

export async function axiosClient({ method = 'get', url }: AxiosClientProps) {
  const { data } = await axiosInstance({
    method,
    url,
  })

  return data
}
